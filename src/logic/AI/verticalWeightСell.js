import symbolEnum from "../../enum/gameSymbols"

function verticalWeightСell(arr, currentCellObj, symbol, gameRule) {
    let emptyСells = 0
    let filledСells = 0
    let opponentSymbol = null;
    symbol === symbolEnum.zero ? opponentSymbol = symbolEnum.cross : opponentSymbol = symbolEnum.zero
    for (let i = 1; i < gameRule; i++) {


        if (currentCellObj.rowIndex + i < arr.length) {

            if (arr[currentCellObj.rowIndex + i][currentCellObj.collIndex] === symbol) {

                filledСells++;
            }

            if (arr[currentCellObj.rowIndex + i][currentCellObj.collIndex] === symbolEnum.emptiness) {

                emptyСells++;
            }

            if (arr[currentCellObj.rowIndex + i][currentCellObj.collIndex] === opponentSymbol) {
                
                break;
            }

        }

    }

    for (let i = 0; i < gameRule; i++) {

        if (currentCellObj.rowIndex - i >= 0) {
            if (arr[currentCellObj.rowIndex - i][currentCellObj.collIndex] === symbol) {
                filledСells++
            }

            if (arr[currentCellObj.rowIndex - i][currentCellObj.collIndex] === symbolEnum.emptiness) {
                emptyСells++
            }

            if (arr[currentCellObj.rowIndex - i][currentCellObj.collIndex] === opponentSymbol) {
                break;
            }

        }

    }

    return emptyСells + filledСells >= gameRule ? (100 * filledСells / (emptyСells + filledСells))+filledСells : 0
}

export default verticalWeightСell