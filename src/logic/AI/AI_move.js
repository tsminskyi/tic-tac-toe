import modeEnum from "../../enum/gameMode"
import AI from "../../logic/AI/AI"
import winIndex from "../../logic/winLogic"

function AI_move(props) {

    const {
        mode, isFirstPlayer, gameRule,
        playerFirstSymbol, playerSecondSymbol,
        victoryCells, gameMove, setVictoryCells, settingTurn } = props;
    const playingField = props.playingField;

    if (mode === modeEnum.eve) {

        let currentSymbol = isFirstPlayer ? playerFirstSymbol : playerSecondSymbol


        let move = AI(props, currentSymbol);
        if (move != null && victoryCells == null) {

            gameMove(move);
            let winCell = winIndex(playingField, move, currentSymbol, gameRule)
            setVictoryCells(winCell);
            if (victoryCells == null) {
                settingTurn(!isFirstPlayer);
            }

        }

    }
    if (mode === modeEnum.pve) {

        if (!isFirstPlayer) {

            let move = AI(props, playerSecondSymbol);
            if (move != null && victoryCells == null) {


                let symbol = isFirstPlayer ? playerFirstSymbol : playerSecondSymbol
                gameMove(move);
                let winCell = winIndex(playingField, move, symbol, gameRule)
                setVictoryCells(winCell);
                if (victoryCells == null) {
                    settingTurn(!isFirstPlayer);
                }
            }

        }

    }
}
export default AI_move