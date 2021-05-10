import winningLine from "../logic/winningLine"
function registrationMove(props, indexObj) {
    const { isFirstPlayer, playerFirstSymbol, playerSecondSymbol, gameMove,
        setVictoryCells, settingTurn, gameRule } = props;
    const playingField = props.playingField;

    const symbol = isFirstPlayer ? playerFirstSymbol : playerSecondSymbol;
    gameMove(indexObj);
    const winCells = winningLine(playingField, indexObj, symbol, gameRule);
    setVictoryCells(winCells);
    if (winCells == null) {
        settingTurn(!isFirstPlayer);
    }
}

export default registrationMove