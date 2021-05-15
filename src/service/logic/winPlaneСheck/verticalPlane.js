

const verticalPlane = (arr, currentCellObj, symbol, gameRule) => {

    const indArr = [];

    for (let i = 1; i < gameRule; i++) {


        if (currentCellObj.rowIndex + i < arr.length) {

            if (arr[currentCellObj.rowIndex + i][currentCellObj.collIndex] === symbol) {

                indArr.push({ rowIndex: currentCellObj.rowIndex + i, collIndex: currentCellObj.collIndex })

            } else break;

        }

    }

    for (let i = 1; i < gameRule; i++) {

        if (currentCellObj.rowIndex - i >= 0) {

            if (arr[currentCellObj.rowIndex - i][currentCellObj.collIndex] === symbol) {

                indArr.push({ rowIndex: currentCellObj.rowIndex - i, collIndex: currentCellObj.collIndex })


            } else break;
        }

    }

    return indArr
}

export default verticalPlane