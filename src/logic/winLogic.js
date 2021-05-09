import leftPlane from "./winPlaneСheck/leftPlane"
import rightPlane from "./winPlaneСheck/rightPlane"
import horizontalPlane from "./winPlaneСheck/horizontalPlane"
import verticalPlane from "./winPlaneСheck/verticalPlane"

function winIndex(props, index, symbol) {

    const {
        playingField, gameRule } = props;

    const arrLines = [
        leftPlane(playingField, index, symbol, gameRule),
        rightPlane(playingField, index, symbol, gameRule),
        horizontalPlane(playingField, index, symbol, gameRule),
        verticalPlane(playingField, index, symbol, gameRule)]
    let winIndex = [];
    arrLines.forEach(element => {

        if (element.length >= gameRule - 1) {
            winIndex = winIndex.concat(element)
        }

    });
    winIndex = winIndex.concat(index)

    return winIndex.length >= gameRule - 1 ? winIndex : null
}
export default winIndex;