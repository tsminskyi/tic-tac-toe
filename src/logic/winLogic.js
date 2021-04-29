import leftPlane from "./planeСheck/leftPlane"
import rightPlane from "./planeСheck/rightPlane"
import horizontalPlane from "./planeСheck/horizontalPlane"
import verticalPlane from "./planeСheck/verticalPlane"

function winIndex(props, index) {

    let symbol;
    props.isFirstPlayer ? symbol = props.playerFirstSymbol : symbol = props.playerSecondSymbol
    const arrLines = [leftPlane(props, index, symbol), rightPlane(props, index, symbol), horizontalPlane(props, index, symbol), verticalPlane(props, index, symbol)]
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