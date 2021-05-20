import symbolEnum from '../../../enum/gameSymbols';

const verticalWeightСell = (arr, currentCellObj, symbol, gameRule) => {

    let emptyСells = 0;
    let filledСells = 0;
    const opponentSymbol = symbol === symbolEnum.zero ? symbolEnum.cross : symbolEnum.zero;
    for (let i = 1; i < gameRule; i++) {

        if (currentCellObj.rowIndex + i < arr.length) {

            if (arr[currentCellObj.rowIndex + i][currentCellObj.collIndex] === symbol) {

                filledСells += 1;

            }

            if (arr[currentCellObj.rowIndex + i][currentCellObj.collIndex] === symbolEnum.emptiness) {

                emptyСells += 1;

            }

            if (arr[currentCellObj.rowIndex + i][currentCellObj.collIndex] === opponentSymbol) {

                break;

            }

        }

    }

    for (let i = 0; i < gameRule; i++) {

        if (currentCellObj.rowIndex - i >= 0) {

            if (arr[currentCellObj.rowIndex - i][currentCellObj.collIndex] === symbol) {

                filledСells += 1;

            }

            if (arr[currentCellObj.rowIndex - i][currentCellObj.collIndex] === symbolEnum.emptiness) {

                emptyСells += 1;

            }

            if (arr[currentCellObj.rowIndex - i][currentCellObj.collIndex] === opponentSymbol) {

                break;

            }

        }

    }

    return emptyСells + filledСells >= gameRule ? ((100 * filledСells) / gameRule) + filledСells : 0;

};

export default verticalWeightСell;
