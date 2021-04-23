import modeEnum from "../enum/gameMode"
import pveMode from "../logic/pveMode"

function gameLogic(props) {

    switch (props.mode) {
        case modeEnum.pvp:

            break;
        case modeEnum.pve:
            pveMode(props);
            break;
        case modeEnum.eve:

            break;
        default:
            break;
    }

}
export default gameLogic;