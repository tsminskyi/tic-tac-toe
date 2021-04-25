import { connect } from 'react-redux'
import mapStateToProps from '../../redux/mapStateToProps'
import FieldСell from "./fieldСell"
import InfoMenu from "../menu/infoMenu"

function PlayingField(props) {
    return (
        <div className="conteiner">
            <InfoMenu />
            <div className="conteiner__playing-field">

                {props.playingField.map((elem, coll) => {
                    return (

                        elem.map((i, row) => {
                            return (

                                < FieldСell value={i} index={{ collIndex: `${coll}`, rowIndex: `${row}` }} key={Number(coll) + Number(row)} />

                            )
                        })
                    )
                })}
            </div>
        </div>

    )
}

export default connect(mapStateToProps)(PlayingField);