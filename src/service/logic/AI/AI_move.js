import gameMode from "../../../enum/gameMode"
import AI_logic from "./AI_logic"
import registrationMove from "../../event/registrationMove"
import isMove from "../../isMove"
const AI_move = (props) => {

    const {
        mode, isFirstPlayer,
        playerFirstSymbol, playerSecondSymbol,
        victoryCells } = props;


    if (mode === gameMode.eve) {

        let currentSymbol = isFirstPlayer ? playerFirstSymbol : playerSecondSymbol


        let move = AI_logic(props, currentSymbol);
        if (isMove(props.playingField) && victoryCells == null) {
            registrationMove(props, move)
        }

    }
    if (mode === gameMode.pve) {

        if (!isFirstPlayer) {

            let move = AI_logic(props, playerSecondSymbol);
            if (isMove(props.playingField) && victoryCells == null) {

                registrationMove(props, move)
            }

        }

    }
}
export default AI_move