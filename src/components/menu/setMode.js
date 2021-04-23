import { connect } from 'react-redux'
import mapDispatchToProps from '../../redux/mapDispatchToProps'
import mapStateToProps from '../../redux/mapStateToProps'
import modeEnum from "../../enum/gameMode"
function GameModes(props) {

    return (
        <div>
            <p>Select the game mode</p>
            <button onClick={() => props.settingMode(modeEnum.pve)}>Player vs computer</button>
            <button onClick={() => props.settingMode(modeEnum.pvp)}>Player vs player</button>
            <button onClick={() => props.settingMode(modeEnum.eve)}>computer vs computer</button>
        </div>
    );

}

export default connect(null, mapDispatchToProps)(GameModes);