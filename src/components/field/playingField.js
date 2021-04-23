import { connect } from 'react-redux'
import mapStateToProps from '../../redux/mapStateToProps'
import FieldСell from "./fieldСell"

function PlayingField(props) {
    console.log(props)
    return (
        <div className="conteiner__playing-field">

            {props.playingField.map((elem, coll) => {
                return (

                    elem.map((i, row) => {
                        return (

                            < FieldСell value={i} index={[coll, row]} key={Number(coll) + Number(row)} />

                        )
                    })
                )
            })}
        </div>
    )
}

export default connect(mapStateToProps)(PlayingField);