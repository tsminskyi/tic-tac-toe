import modeEnum from "../../enum/gameMode"
import AI_logic from "./AI_logic"
import registrationMove from "../../event/registrationMove"
function AI_move(props) {

    const {
        mode, isFirstPlayer,
        playerFirstSymbol, playerSecondSymbol,
        victoryCells } = props;
    

    if (mode === modeEnum.eve) {

        let currentSymbol = isFirstPlayer ? playerFirstSymbol : playerSecondSymbol


        let move = AI_logic(props, currentSymbol);
        if (move != null && victoryCells == null) {

            registrationMove(props, move)
        }

    }
    if (mode === modeEnum.pve) {

        if (!isFirstPlayer) {

            let move = AI_logic(props, playerSecondSymbol);
            if (move != null && victoryCells == null) {

                registrationMove(props, move)
            }

        }

    }
}
export default AI_move