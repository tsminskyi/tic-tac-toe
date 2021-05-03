import circle from "../../img/circle-regular.svg"
import times from "../../img/times-solid.svg"
import { connect } from 'react-redux'
import mapDispatchToProps from "../../redux/mapDispatchToProps"
import mapStateToProps from "../../redux/mapStateToProps"
import symbolEnum from "../../enum/gameSymbols"
import modeEnum from "../../enum/gameMode"
import winIndex from "../../logic/winLogic"


function click(props) {

    props.gameMove(props.index)
    props.setWinCell(winIndex(props, props.index));

}


function FieldСell(props) {

    switch (props.mode) {
        case modeEnum.pvp: {
            
            if (props.value !== symbolEnum.emptiness) {


                return (
                    <div style={{ width: props.style.size, height: props.style.size, backgroundColor: props.style.backgroundColor }}>
                        <img src={props.value === symbolEnum.zero ? circle : times} alt="" />
                    </div>)
            }

            if (props.winCell != null) {
                return (
                    <div style={{ width: props.style.size, height: props.style.size }}>

                    </div>
                )
            }

            return (
                <div onClick={() => click(props)} style={{ width: props.style.size, height: props.style.size }}>

                </div>
            )
        }

        case modeEnum.pve: {
            if (props.value !== symbolEnum.emptiness) {


                return (
                    <div style={{ width: props.style.size, height: props.style.size, backgroundColor: props.style.backgroundColor }}>
                        <img src={props.value === symbolEnum.zero ? circle : times} alt="" />
                    </div>)
            }

            if (props.winCell != null || !props.isFirstPlayer) {
                return (
                    <div style={{ width: props.style.size, height: props.style.size }}>

                    </div>
                )
            }

            return (
                <div onClick={() => click(props)} style={{ width: props.style.size, height: props.style.size }}>

                </div>
            )
        }

        default: {
            if (props.value !== symbolEnum.emptiness) {


                return (
                    <div style={{ width: props.style.size, height: props.style.size, backgroundColor: props.style.backgroundColor }}>
                        <img src={props.value === symbolEnum.zero ? circle : times} alt="" />
                    </div>)
            }

            return (
                <div style={{ width: props.style.size, height: props.style.size }}>

                </div>
            )
        }

    }


}

export default connect(mapStateToProps, mapDispatchToProps)(FieldСell);;