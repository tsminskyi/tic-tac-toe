import { connect } from 'react-redux'
import mapDispatchToProps from '../../redux/mapDispatchToProps'
import mapStateToProps from '../../redux/mapStateToProps'
import boardSizeEnum from "../../enum/gameBoardSize"

function BoardSize(props) {
    const {
        settingSizeField } = props;
    return (
        <div>
            <p>Select the board size</p>
            <button onClick={() => settingSizeField(boardSizeEnum.small)}> {boardSizeEnum.small} X {boardSizeEnum.small}</button>
            <button onClick={() => settingSizeField(boardSizeEnum.medium)}>{boardSizeEnum.medium} X {boardSizeEnum.medium}</button>
            <button onClick={() => settingSizeField(boardSizeEnum.large)}>{boardSizeEnum.large} X {boardSizeEnum.large}</button>
        </div>
    );

}

export default connect(mapStateToProps,mapDispatchToProps)(BoardSize);