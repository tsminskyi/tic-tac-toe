import circle from "../../img/circle-regular.svg"
import times from "../../img/times-solid.svg"
import { connect } from 'react-redux'
import mapDispatchToProps from "../../redux/mapDispatchToProps"
import mapStateToProps from "../../redux/mapStateToProps"
import symbolEnum from "../../enum/gameSymbols"
import gameLogic from "../../logic/gameLogic"

function FieldСell(props) {

    const widthCell = Math.fround(100 / props.playingField[0].length);

    if (props.value === symbolEnum.cross) {
        return (
            <div style={{ width: widthCell + "%", height: widthCell + "%" }}>
                <img src={times} />
            </div>)
    }
    if (props.value === symbolEnum.zero) {
        return (
            <div style={{ width: widthCell + "%", height: widthCell + "%" }}>
                <img src={circle} />
            </div>)
    }

    return (
        <div onClick={() => props.gameMove(props.index)} style={{ width: widthCell + "%", height: widthCell + "%" }}>

        </div>
    )


}

export default connect(mapStateToProps, mapDispatchToProps)(FieldСell);;