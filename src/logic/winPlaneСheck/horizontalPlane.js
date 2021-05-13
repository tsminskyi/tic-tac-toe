

const horizontalPlane = (arr, currentCellObj, symbol, size) => {
    const indArr = [];

    for (let i = 1; i < size; i++) {


        if (currentCellObj.collIndex + i < arr.length) {

            if (arr[currentCellObj.rowIndex][currentCellObj.collIndex + i] === symbol) {

                indArr.push({ rowIndex: currentCellObj.rowIndex, collIndex: currentCellObj.collIndex + i })

            } else break;

        }

    }

    for (let i = 1; i < size; i++) {

        if (currentCellObj.collIndex - i >= 0) {
            if (arr[currentCellObj.rowIndex][currentCellObj.collIndex - i] === symbol) {

                indArr.push({ rowIndex: currentCellObj.rowIndex, collIndex: currentCellObj.collIndex - i })

            } else break;

        }

    }

    return indArr;
}

export default horizontalPlane