import symbolEnum from "../../enum/gameSymbols"

const horizontalWeightСell = (arr, currentCellObj, symbol, gameRule) => {
    let emptyСells = 0
    let filledСells = 0
    let opponentSymbol = null;
    symbol === symbolEnum.zero ? opponentSymbol = symbolEnum.cross : opponentSymbol = symbolEnum.zero

    for (let i = 1; i < arr.length; i++) {


        if (currentCellObj.collIndex + i < arr.length) {

            if (arr[currentCellObj.rowIndex][currentCellObj.collIndex + i] === symbol) {

                filledСells++;
            }

            if (arr[currentCellObj.rowIndex][currentCellObj.collIndex + i] === symbolEnum.emptiness) {

                emptyСells++;
            }

            if (arr[currentCellObj.rowIndex][currentCellObj.collIndex + i] === opponentSymbol) {

                break;
            }

        }

    }

    for (let i = 0; i < arr.length; i++) {

        if (currentCellObj.collIndex - i >= 0) {

            if (arr[currentCellObj.rowIndex][currentCellObj.collIndex - i] === symbol) {

                filledСells++;
            }

            if (arr[currentCellObj.rowIndex][currentCellObj.collIndex - i] === symbolEnum.emptiness) {

                emptyСells++;
            }

            if (arr[currentCellObj.rowIndex][currentCellObj.collIndex - i] === opponentSymbol) {

                break;
            }
        }

    }

    return emptyСells + filledСells >= gameRule ? (100 * filledСells / (emptyСells + filledСells)) + filledСells : 0
}

export default horizontalWeightСell