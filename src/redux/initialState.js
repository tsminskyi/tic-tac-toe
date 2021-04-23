import symbolEnum from "../enum/gameSymbols"

const initialSate = {
    playingField: null,
    size: 0,
    mode: null,
    newGame: false,
    isFirstPlayer: true,
    firstSymbol: symbolEnum.cross,
    secondSymbol: symbolEnum.zero

}
export default initialSate;