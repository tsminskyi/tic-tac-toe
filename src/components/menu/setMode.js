import { connect } from 'react-redux'
import mapDispatchToProps from '../../redux/mapDispatchToProps'
import modeEnum from "../../enum/gameMode"

function GameModes(props) {
    const {settingMode} = props;
    return (
        <div>
            <p>Select the game mode</p>
            <button onClick={() => settingMode(modeEnum.pve)}>Player vs computer</button>
            <button onClick={() => settingMode(modeEnum.pvp)}>Player vs player</button>
            <button onClick={() => settingMode(modeEnum.eve)}>computer vs computer</button>
        </div>
    );

}

export default connect(null, mapDispatchToProps)(GameModes);