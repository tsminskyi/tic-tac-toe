import { connect } from 'react-redux'
import mapStateToProps from '../../redux/mapStateToProps'

function InfoMenu(props) {

    let turn;
    props.isFirstPlayer ? turn = props.playerFirstSymbol : turn = props.playerSecondSymbol
    return (
        <div className="info">
            <p>TURN: {turn}</p>
        </div>
    );

}

export default connect(mapStateToProps)(InfoMenu);