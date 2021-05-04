import { connect } from 'react-redux'
import mapStateToProps from '../../redux/mapStateToProps'
import mapDispatchToProps from '../../redux/mapDispatchToProps'

function InfoMenu(props) {

    let turn;
    props.isFirstPlayer ? turn = props.playerFirstSymbol : turn = props.playerSecondSymbol

    if (props.winCell != null) {
        return (
            <div>
                <div className="info">
                    <p>TURN: {turn}</p>
                    <button onClick={() => props.endGame()}>New Game</button>
                </div>
                <div className="resultMenu">
                    WIN - {turn}
                </div>
            </div>

        )
    }

    return (

        <div className="info">
            <p>TURN: {turn}</p>
            <button onClick={() => props.endGame()}>New Game</button>
        </div>

    )

}

export default connect(mapStateToProps, mapDispatchToProps)(InfoMenu);