import horizontalPlane from "../winPlaneСheck/horizontalPlane";
import verticalPlane from "../winPlaneСheck/verticalPlane";
import leftPlane from "../winPlaneСheck/leftPlane";
import rightPlane from "../winPlaneСheck/rightPlane";

import horizontalWeightСell from "./horizontalWeightСell";
import verticalWeightСell from "./verticalWeightСell";
import leftWeightСell from "./leftWeightСell";
import rightWeightСell from "./rightWeightСell";

import symbolEnum from "../../enum/gameSymbols"

function AI(props, symbol) {

    let moveOptions = [];
    for (let i = 0; i < props.playingField.length; i++) {

        for (let x = 0; x < props.playingField.length; x++) {
            if (props.playingField[i][x] ===symbolEnum.emptiness) {
                let currentCellObj = { rowIndex: i, collIndex: x }

                let winArrCell = [horizontalPlane(props.playingField, currentCellObj, symbol, props.gameRule),
                leftPlane(props.playingField, currentCellObj, symbol, props.gameRule),
                rightPlane(props.playingField, currentCellObj, symbol, props.gameRule),
                verticalPlane(props.playingField, currentCellObj, symbol, props.gameRule)]

                if (winArrCell[0].length >= props.gameRule ||
                    winArrCell[1].length >= props.gameRule ||
                    winArrCell[2].length >= props.gameRule ||
                    winArrCell[3].length >= props.gameRule) {
                    return currentCellObj
                }

                let weightСell = [horizontalWeightСell(props.playingField, currentCellObj, symbol, props.gameRule),
                verticalWeightСell(props.playingField, currentCellObj, symbol, props.gameRule),
                leftWeightСell(props.playingField, currentCellObj, symbol, props.gameRule),
                rightWeightСell(props.playingField, currentCellObj, symbol, props.gameRule)];
                weightСell.sort((a, b) => { return b - a })
                moveOptions.push({ rowIndex: i, collIndex: x, weigh: weightСell[0] })
            }
        }

    }

    moveOptions.sort((a, b) => { return b.weigh - a.weigh });
    console.log(moveOptions)
    console.log(moveOptions[0])
    return moveOptions[0];
}
export default AI;