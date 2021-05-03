import leftPlane from "./winPlaneСheck/leftPlane"
import rightPlane from "./winPlaneСheck/rightPlane"
import horizontalPlane from "./winPlaneСheck/horizontalPlane"
import verticalPlane from "./winPlaneСheck/verticalPlane"

function winIndex(props, index) {

    let symbol;
    props.isFirstPlayer ? symbol = props.playerFirstSymbol : symbol = props.playerSecondSymbol
    const arrLines = [
        leftPlane(props.playingField, index, symbol, props.gameRule),
        rightPlane(props.playingField, index, symbol, props.gameRule),
        horizontalPlane(props.playingField, index, symbol, props.gameRule),
        verticalPlane(props.playingField, index, symbol, props.gameRule)]
    let winIndex = [];
    arrLines.forEach(element => {

        if (element.length >= props.gameRule - 1) {
            winIndex = winIndex.concat(element)
        }

    });
    winIndex = winIndex.concat(index)
    // var unionIndex = Array.from(new Set(winIndex.map(JSON.stringify))).map(JSON.parse);
    return winIndex.length >= props.gameRule - 1 ? winIndex : null
}
export default winIndex;