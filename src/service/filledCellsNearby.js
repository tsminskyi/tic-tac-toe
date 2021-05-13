import symbolEnum from "../enum/gameSymbols"
const filledCellsNearby = (indexObj, arr) => {

    const rules = [
        { row: indexObj.rowIndex - 1, coll: indexObj.collIndex - 1 },
        { row: indexObj.rowIndex - 1, coll: indexObj.collIndex },
        { row: indexObj.rowIndex - 1, coll: indexObj.collIndex + 1 },
        { row: indexObj.rowIndex, coll: indexObj.collIndex - 1 },
        { row: indexObj.rowIndex, coll: indexObj.collIndex + 1 },
        { row: indexObj.rowIndex + 1, coll: indexObj.collIndex - 1 },
        { row: indexObj.rowIndex + 1, coll: indexObj.collIndex },
        { row: indexObj.rowIndex + 1, coll: indexObj.collIndex + 1 }]



    for (let i = 0; i < rules.length; i++) {


        if (rules[i].row >= 0
            && rules[i].row < arr.length
            && rules[i].coll >= 0
            && rules[i].coll < arr.length) {

            if (arr[rules[i].row][rules[i].coll] !== symbolEnum.emptiness) {

                return true
            }
        }

    }

    return false;
}
export default filledCellsNearby