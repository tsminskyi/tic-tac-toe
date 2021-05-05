import horizontalWeightСell from "./horizontalWeightСell";
import verticalWeightСell from "./verticalWeightСell";
import leftWeightСell from "./leftWeightСell";
import rightWeightСell from "./rightWeightСell";
import filledCellsNearby from "../../service/filledCellsNearby"
import symbolEnum from "../../enum/gameSymbols"
import winIndex from "../winLogic"
function AI(props, symbol) {

    let moveOptions = [];
    let moveOptionsOpponent = [];
    for (let i = 0; i < props.playingField.length; i++) {

        for (let x = 0; x < props.playingField.length; x++) {
            if (props.playingField[i][x] === symbolEnum.emptiness) {
                let currentCellObj = { rowIndex: i, collIndex: x }
                let symbolOpponent = null;
                symbol === symbolEnum.cross ? symbolOpponent = symbolEnum.zero : symbolOpponent = symbolEnum.cross

                if (filledCellsNearby(currentCellObj, props.playingField)) {
                    let win = winIndex(props, currentCellObj, symbol);
                    let winOpponent = winIndex(props, currentCellObj, symbolOpponent);
                    if (win != null || winOpponent != null) {
                        return currentCellObj
                    }

                    let weightСell = [horizontalWeightСell(props.playingField, currentCellObj, symbol, props.gameRule),
                    verticalWeightСell(props.playingField, currentCellObj, symbol, props.gameRule),
                    leftWeightСell(props.playingField, currentCellObj, symbol, props.gameRule),
                    rightWeightСell(props.playingField, currentCellObj, symbol, props.gameRule)];

                    weightСell.sort((a, b) => { return b - a })
                    moveOptions.push({ rowIndex: i, collIndex: x, weigh: weightСell[0] })



                    let weightСellOpponent = [horizontalWeightСell(props.playingField, currentCellObj, symbolOpponent, props.gameRule),
                    verticalWeightСell(props.playingField, currentCellObj, symbolOpponent, props.gameRule),
                    leftWeightСell(props.playingField, currentCellObj, symbolOpponent, props.gameRule),
                    rightWeightСell(props.playingField, currentCellObj, symbolOpponent, props.gameRule)];

                    weightСellOpponent.sort((a, b) => { return b - a })
                    moveOptionsOpponent.push({ rowIndex: i, collIndex: x, weigh: weightСellOpponent[0] })
                }

            }
        }

    }
    if (moveOptions.length < 1) {

        return { rowIndex: Math.floor(Math.random() * props.playingField.length), collIndex: Math.floor(Math.random() * props.playingField.length) };

    }
    moveOptions.sort((a, b) => { return b.weigh - a.weigh });
    moveOptionsOpponent.sort((a, b) => { return b.weigh - a.weigh });

    return moveOptions[0].weigh < moveOptionsOpponent[0].weigh ? moveOptionsOpponent[0] : moveOptions[0]
}
export default AI;