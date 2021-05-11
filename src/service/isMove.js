import gameSymbols from "../enum/gameSymbols"
function isMove(arr) {

    let newArr = []
    arr.forEach(element => {
        newArr.join(element);
    });
    let findEmptiCell = newArr.indexOf(gameSymbols.emptiness);
    if (findEmptiCell >= 0) return true;
    return false
}
export default isMove