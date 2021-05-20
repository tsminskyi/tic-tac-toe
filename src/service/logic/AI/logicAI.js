import horizontalWeightСell from './horizontalWeightСell';
import verticalWeightСell from './verticalWeightСell';
import leftWeightСell from './leftWeightСell';
import rightWeightСell from './rightWeightСell';
import filledCellsNearby from '../../filledCellsNearby';
import gameSymbols from '../../../enum/gameSymbols';
import winningLine from '../winningLine';
import gameRules from '../../../enum/gameRules';

const logicAI = (props, symbol) => {

    const { gameRule, playingField } = props;
    const moveOptions = [];
    const moveOptionsOpponent = [];
    const symbolOpponent = symbol === gameSymbols.cross ? gameSymbols.zero : gameSymbols.cross;
    for (let i = 0; i < playingField.length; i++) {

        for (let x = 0; x < playingField.length; x++) {

            if (playingField[i][x] === gameSymbols.emptiness) {

                const currentCellObj = { rowIndex: i, collIndex: x };

                if (filledCellsNearby(currentCellObj, playingField) || gameRule === gameRules.classic) {

                    const win = winningLine(playingField, currentCellObj, symbol, gameRule);
                    const winOpponent = winningLine(playingField, currentCellObj, symbolOpponent);
                    if (win != null || winOpponent != null) {

                        return currentCellObj;

                    }

                    const weightСell = [horizontalWeightСell(playingField, currentCellObj, symbol, gameRule),
                    verticalWeightСell(playingField, currentCellObj, symbol, gameRule),
                    leftWeightСell(playingField, currentCellObj, symbol, gameRule),
                    rightWeightСell(playingField, currentCellObj, symbol, gameRule)];

                    weightСell.sort((a, b) => b - a);
                    moveOptions.push({ rowIndex: i, collIndex: x, weigh: weightСell[0] });

                    const weightСellOpponent = [horizontalWeightСell(playingField, currentCellObj, symbolOpponent, gameRule),
                    verticalWeightСell(playingField, currentCellObj, symbolOpponent, gameRule),
                    leftWeightСell(playingField, currentCellObj, symbolOpponent, gameRule),
                    rightWeightСell(playingField, currentCellObj, symbolOpponent, gameRule)];

                    weightСellOpponent.sort((a, b) => b - a);
                    moveOptionsOpponent.push({ rowIndex: i, collIndex: x, weigh: weightСellOpponent[0] });

                }

            }

        }

    }
    if (moveOptions.length < 1 || props.isFirstClick) {

        return {
            rowIndex: Math.floor(Math.random() * playingField.length),
            collIndex: Math.floor(Math.random() * playingField.length)
        };

    }
    moveOptions.sort((a, b) => b.weigh - a.weigh);
    moveOptionsOpponent.sort((a, b) => b.weigh - a.weigh);
    return moveOptions[0].weigh < moveOptionsOpponent[0].weigh ? moveOptionsOpponent[0] : moveOptions[0];

};
export default logicAI;
