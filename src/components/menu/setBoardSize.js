import { connect } from 'react-redux'
import mapDispatchToProps from '../../redux/mapDispatchToProps'
import mapStateToProps from '../../redux/mapStateToProps'

function BoardSize(props) {
    return (
        <div>
            <p>Select the board size</p>
            <button onClick={() => props.settingSizeField(3)}> 3 / 3</button>
            <button onClick={() => props.settingSizeField(15)}>15 / 15</button>
            <button onClick={() => props.settingSizeField(50)}>50 / 50</button>
        </div>
    );

}

export default connect(mapStateToProps,mapDispatchToProps)(BoardSize);