import symbolEnum from '../../../enum/gameSymbols';

const horizontalWeightСell = (arr, currentCellObj, symbol, gameRule) => {

    let emptyСells = 0;
    let filledСells = 0;
    const opponentSymbol = symbol === symbolEnum.zero ? symbolEnum.cross : symbolEnum.zero;

    for (let i = 1; i < arr.length; i++) {

        if (currentCellObj.collIndex + i < arr.length) {

            if (arr[currentCellObj.rowIndex][currentCellObj.collIndex + i] === symbol) {

                filledСells += 1;

            }

            if (arr[currentCellObj.rowIndex][currentCellObj.collIndex + i] === symbolEnum.emptiness) {

                emptyСells += 1;

            }

            if (arr[currentCellObj.rowIndex][currentCellObj.collIndex + i] === opponentSymbol) {

                break;

            }

        }

    }

    for (let i = 0; i < arr.length; i++) {

        if (currentCellObj.collIndex - i >= 0) {

            if (arr[currentCellObj.rowIndex][currentCellObj.collIndex - i] === symbol) {

                filledСells += 1;

            }

            if (arr[currentCellObj.rowIndex][currentCellObj.collIndex - i] === symbolEnum.emptiness) {

                emptyСells += 1;

            }

            if (arr[currentCellObj.rowIndex][currentCellObj.collIndex - i] === opponentSymbol) {

                break;

            }

        }

    }

    return emptyСells + filledСells >= gameRule ? ((100 * filledСells) / gameRule) + filledСells : 0;

};

export default horizontalWeightСell;
