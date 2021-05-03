import symbolEnum from "../../enum/gameSymbols" 

function verticalPlane(arr, currentCellObj, symbol, gameRule) {

    let emptyСells = 0
    let filledСells = 0

    for (let i = 1; i < gameRule; i++) {


        if (currentCellObj.rowIndex + i < arr.length) {

            if (arr[currentCellObj.rowIndex + i][currentCellObj.collIndex] === symbol) {

                filledСells++

            }

            if (arr[currentCellObj.rowIndex + i][currentCellObj.collIndex] === symbolEnum.emptiness) {

                emptyСells++
            }

            if (arr[currentCellObj.rowIndex + i][currentCellObj.collIndex] !== symbolEnum.emptiness &&
                arr[currentCellObj.rowIndex + i][currentCellObj.collIndex] !== symbol) {

                break;
            }

        }

    }

    for (let i = 1; i < gameRule; i++) {

        if (currentCellObj.rowIndex - i >= 0) {

            if (arr[currentCellObj.rowIndex - i][currentCellObj.collIndex] === symbol) {

                filledСells++

            }

            if (arr[currentCellObj.rowIndex - i][currentCellObj.collIndex] === symbolEnum.emptiness) {

                emptyСells++
            }

            if (arr[currentCellObj.rowIndex - i][currentCellObj.collIndex] !== symbolEnum.emptiness &&
                arr[currentCellObj.rowIndex - i][currentCellObj.collIndex] !== symbol) {

                break;
            }
        }

    }

    return emptyСells + filledСells >= gameRule ? 100 * filledСells / (emptyСells + filledСells) : 0
}

export default verticalPlane