import leftPlane from "./winPlaneСheck/leftPlane"
import rightPlane from "./winPlaneСheck/rightPlane"
import horizontalPlane from "./winPlaneСheck/horizontalPlane"
import verticalPlane from "./winPlaneСheck/verticalPlane"

const winningLine = (arr, index, symbol, gameRule) => {

    const arrLines = [
        leftPlane(arr, index, symbol, gameRule),
        rightPlane(arr, index, symbol, gameRule),
        horizontalPlane(arr, index, symbol, gameRule),
        verticalPlane(arr, index, symbol, gameRule)]
    let winIndex = [];
    arrLines.forEach(element => {

        if (element.length >= gameRule - 1) {
            winIndex = winIndex.concat(element)
        }

    });
    winIndex = winIndex.concat(index)

    return winIndex.length >= gameRule - 1 ? winIndex : null
}
export default winningLine;