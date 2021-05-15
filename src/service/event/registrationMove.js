import winningLine from "../logic/winningLine"
const registrationMove = (props, indexObj) => {
    const { isFirstPlayer, playerFirstSymbol, playerSecondSymbol, gameMove,
        settingVictoryCells, settingTurn, gameRule } = props;
    const playingField = props.playingField;

    const symbol = isFirstPlayer ? playerFirstSymbol : playerSecondSymbol;
    gameMove(indexObj);
    const winCells = winningLine(playingField, indexObj, symbol, gameRule);
    settingVictoryCells(winCells);
    if (winCells == null) {
        settingTurn(!isFirstPlayer);
    }
}

export default registrationMove