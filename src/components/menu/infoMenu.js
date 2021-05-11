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
                <div className="conteiner__menu">
                    <button id="back" type="button" className="btn btn-secondary" onClick={() => endGame()}>Back</button>
                    <p className="text-uppercase">turn: {turn}</p>
                </div>
                <div className="conteiner__resultMenu">
                    WIN - {turn}
                </div>
            </div>

        )
    }

    return (

        <div>
            <div className="conteiner__menu">
                <button id="back" type="button" className="btn btn-secondary" onClick={() => endGame()}>Back</button>
                <p className="text-uppercase">turn: {turn}</p>
            </div>
        </div>

    )

}

export default connect(mapStateToProps, mapDispatchToProps)(InfoMenu);