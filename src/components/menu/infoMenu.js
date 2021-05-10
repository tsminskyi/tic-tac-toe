import { connect } from 'react-redux'
import mapStateToProps from '../../redux/mapStateToProps'
import mapDispatchToProps from '../../redux/mapDispatchToProps'

function InfoMenu(props) {
    const {
        isFirstPlayer, playerFirstSymbol, playerSecondSymbol,
        victoryCells, endGame } = props;
    let turn = isFirstPlayer ? playerFirstSymbol : playerSecondSymbol

    if (victoryCells != null) {
        return (
            <div>
                <div className="info">
                    <p>TURN: {turn}</p>
                    <button onClick={() => endGame()}>New Game</button>
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
            <button onClick={() => endGame()}>New Game</button>
        </div>

    )

}

export default connect(mapStateToProps, mapDispatchToProps)(InfoMenu);