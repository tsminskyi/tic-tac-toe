import gameSymbols from "../enum/gameSymbols"
const isMove = (arr) => {

    let newArr = []
    arr.forEach(element => {
        newArr = newArr.concat(element);
    });
    let findEmptiCell = newArr.indexOf(gameSymbols.emptiness);
    if (findEmptiCell >= 0) return true;
    return false
}
export default isMove