import horizontalWeightСell from "./horizontalWeightСell";
import verticalWeightСell from "./verticalWeightСell";
import leftWeightСell from "./leftWeightСell";
import rightWeightСell from "./rightWeightСell";
import filledCellsNearby from "../../service/filledCellsNearby"
import symbolEnum from "../../enum/gameSymbols"
import winIndex from "../winningLine"
import gameRules from "../../enum/gameRules"
function AI(props, symbol) {
    const gameRule = props.gameRule;
    const playingField = props.playingField;
    let moveOptions = [];
    let moveOptionsOpponent = [];
    for (let i = 0; i < playingField.length; i++) {

        for (let x = 0; x < playingField.length; x++) {
            if (playingField[i][x] === symbolEnum.emptiness) {
                let currentCellObj = { rowIndex: i, collIndex: x }
                let symbolOpponent = null;
                symbol === symbolEnum.cross ? symbolOpponent = symbolEnum.zero : symbolOpponent = symbolEnum.cross

                if (filledCellsNearby(currentCellObj, playingField) || gameRule === gameRules.classic) {
                    let win = winIndex(playingField, currentCellObj, symbol, gameRule);
                    let winOpponent = winIndex(playingField, currentCellObj, symbolOpponent);
                    if (win != null || winOpponent != null) {
                        return currentCellObj
                    }

                    let weightСell = [horizontalWeightСell(playingField, currentCellObj, symbol, gameRule),
                    verticalWeightСell(playingField, currentCellObj, symbol, gameRule),
                    leftWeightСell(playingField, currentCellObj, symbol, gameRule),
                    rightWeightСell(playingField, currentCellObj, symbol, gameRule)];

                    weightСell.sort((a, b) => { return b - a })
                    moveOptions.push({ rowIndex: i, collIndex: x, weigh: weightСell[0] })



                    let weightСellOpponent = [horizontalWeightСell(playingField, currentCellObj, symbolOpponent, gameRule),
                    verticalWeightСell(playingField, currentCellObj, symbolOpponent, gameRule),
                    leftWeightСell(playingField, currentCellObj, symbolOpponent, gameRule),
                    rightWeightСell(playingField, currentCellObj, symbolOpponent, gameRule)];

                    weightСellOpponent.sort((a, b) => { return b - a })
                    moveOptionsOpponent.push({ rowIndex: i, collIndex: x, weigh: weightСellOpponent[0] })
                }

            }
        }

    }
    if (moveOptions.length < 1) {

        return { rowIndex: Math.floor(Math.random() * playingField.length), collIndex: Math.floor(Math.random() * playingField.length) };

    }
    moveOptions.sort((a, b) => { return b.weigh - a.weigh });
    moveOptionsOpponent.sort((a, b) => { return b.weigh - a.weigh });

    return moveOptions[0].weigh < moveOptionsOpponent[0].weigh ? moveOptionsOpponent[0] : moveOptions[0]
}
export default AI;