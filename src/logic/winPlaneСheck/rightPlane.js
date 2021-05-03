function rightPlane(arr, currentCellObj, symbol, size) {

    const indArr = [];

    for (let i = 1; i < size; i++) {


        if (currentCellObj.rowIndex - i >= 0
            && currentCellObj.collIndex + i < arr[currentCellObj.rowIndex - i].length) {

            if (arr[currentCellObj.rowIndex - i][currentCellObj.collIndex + i] === symbol) {

                indArr.push({ rowIndex: currentCellObj.rowIndex - i, collIndex: currentCellObj.collIndex + i })

            } else break;

        }

    }

    for (let i = 1; i < size; i++) {

        if (currentCellObj.rowIndex + i < arr.length
            && currentCellObj.collIndex - i >= 0) {

            if (arr[currentCellObj.rowIndex + i][currentCellObj.collIndex - i] === symbol) {

                indArr.push({ rowIndex: currentCellObj.rowIndex + i, collIndex: currentCellObj.collIndex - i })

            } else break;

        }

    }

    return indArr;
}

export default rightPlane