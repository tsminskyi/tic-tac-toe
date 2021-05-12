import { connect } from 'react-redux'
import mapStateToProps from '../../redux/mapStateToProps'
import mapDispatchToProps from '../../redux/mapDispatchToProps'
import isMove from "../../service/isMove"
import ResultMenu from './resultMenu'
import clickMenu from "../../event/clickMenu"
function InfoMenu(props) {
    const {
        isFirstPlayer, playerFirstSymbol, playerSecondSymbol,
        victoryCells } = props;

    const turn = isFirstPlayer ? playerFirstSymbol : playerSecondSymbol
    const emptyСells = isMove(props.playingField);
    const victory = victoryCells !== null ? true : false;

    return (
        <div onClick={(event) => clickMenu(event, props)}>
            <div className="conteiner__menu" >
                <button id="back" type="button" className="btn btn-secondary">Back</button>
                <p className="text-uppercase">turn: {turn}</p>
            </div>
            <ResultMenu turn={turn} victory={victory} emptyСells={emptyСells} />
        </div>

    )

}

export default connect(mapStateToProps, mapDispatchToProps)(InfoMenu);