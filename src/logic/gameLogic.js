import modeEnum from "../enum/gameMode"
import pveMode from "../logic/pveMode"

function gameLogic(props, row, coll) {

    switch (props.mode) {
        case modeEnum.pvp:

            return
        case modeEnum.pve:
            return pveMode(props, row, coll);

        case modeEnum.eve:

            return
        default:
            break;
    }

}
export default gameLogic;