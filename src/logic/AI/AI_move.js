import modeEnum from "../../enum/gameMode"
import AI from "../../logic/AI/AI"
import winIndex from "../../logic/winLogic"

function AI_move(props) {

    const {
        mode, isFirstPlayer,
        playerFirstSymbol, playerSecondSymbol,
        winCell, gameMove, setWinCell, settingTurn } = props;
        
    if (mode === modeEnum.eve) {

        let currentSymbol = isFirstPlayer ? playerFirstSymbol : playerSecondSymbol


        let move = AI(props, currentSymbol);

        if (move != null && winCell == null) {

            gameMove(move);
            let winCell = winIndex(props, move, currentSymbol)
            setWinCell(winCell);
            if (winCell == null) {
                settingTurn(!isFirstPlayer);
            }

        }

    }
    if (mode === modeEnum.pve) {

        if (!isFirstPlayer) {

            let move = AI(props, playerSecondSymbol);

            if (move != null && winCell == null) {


                let symbol = isFirstPlayer ? playerFirstSymbol : playerSecondSymbol
                gameMove(move);
                let winCell = winIndex(props, move, symbol)
                setWinCell(winCell);
                if (winCell == null) {
                    settingTurn(!isFirstPlayer);
                }
            }

        }

    }
}
export default AI_move