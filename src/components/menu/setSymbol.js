import { connect } from 'react-redux'
import mapDispatchToProps from '../../redux/mapDispatchToProps'
import symbolsEnum from "../../enum/gameSymbols"
function GameSymbol(props) {

    return (
        <div>
            <p>Select symbol</p>
            <button onClick={()=>props.settingSymbol(symbolsEnum.cross)}>X</button>
            <button onClick={()=>props.settingSymbol(symbolsEnum.zero)}>O</button>
        </div>
    );

}

export default connect(null, mapDispatchToProps)(GameSymbol);