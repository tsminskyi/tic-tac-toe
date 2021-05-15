import symbolEnum from "../../../enum/gameSymbols"

const rightWeightСell = (arr, currentCellObj, symbol, gameRule) => {

    let emptyСells = 0
    let filledСells = 0
    let opponentSymbol = null;
    symbol === symbolEnum.zero ? opponentSymbol = symbolEnum.cross : opponentSymbol = symbolEnum.zero

    for (let i = 1; i < gameRule; i++) {


        if (currentCellObj.rowIndex - i >= 0
            && currentCellObj.collIndex + i < arr[currentCellObj.rowIndex - i].length) {

            if (arr[currentCellObj.rowIndex - i][currentCellObj.collIndex + i] === symbol) {

                filledСells++;
            }

            if (arr[currentCellObj.rowIndex - i][currentCellObj.collIndex + i] === symbolEnum.emptiness) {

                emptyСells++;
            }

            if (arr[currentCellObj.rowIndex - i][currentCellObj.collIndex + i] === opponentSymbol) {

                break;
            }

        }

    }

    for (let i = 0; i < gameRule; i++) {

        if (currentCellObj.rowIndex + i < arr.length
            && currentCellObj.collIndex - i >= 0) {

            if (arr[currentCellObj.rowIndex + i][currentCellObj.collIndex - i] === symbol) {

                filledСells++;
            }

            if (arr[currentCellObj.rowIndex + i][currentCellObj.collIndex - i] === symbolEnum.emptiness) {

                emptyСells++;
            }

            if (arr[currentCellObj.rowIndex + i][currentCellObj.collIndex - i] === opponentSymbol) {

                break;
            }

        }

    }

    return emptyСells + filledСells >= gameRule ? (100 * filledСells / (emptyСells + filledСells)) + filledСells : 0
}

export default rightWeightСell