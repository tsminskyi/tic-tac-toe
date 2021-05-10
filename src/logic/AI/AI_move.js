import modeEnum from "../../enum/gameMode"
import AI from "../../logic/AI/AI"
import registrationMove from "../../event/registrationMove"
function AI_move(props) {

    const {
        mode, isFirstPlayer,
        playerFirstSymbol, playerSecondSymbol,
        victoryCells } = props;
    

    if (mode === modeEnum.eve) {

        let currentSymbol = isFirstPlayer ? playerFirstSymbol : playerSecondSymbol


        let move = AI(props, currentSymbol);
        if (move != null && victoryCells == null) {

            registrationMove(props, move)
        }

    }
    if (mode === modeEnum.pve) {

        if (!isFirstPlayer) {

            let move = AI(props, playerSecondSymbol);
            if (move != null && victoryCells == null) {

                registrationMove(props, move)
            }

        }

    }
}
export default AI_move