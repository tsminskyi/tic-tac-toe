import circle from "../../img/circle-regular.svg"
import times from "../../img/times-solid.svg"
import { connect } from 'react-redux'
import mapDispatchToProps from "../../redux/mapDispatchToProps"
import mapStateToProps from "../../redux/mapStateToProps"
import symbolEnum from "../../enum/gameSymbols"
import modeEnum from "../../enum/gameMode"
import winIndex from "../../logic/winLogic"


function click(props) {
    const { isFirstPlayer, playerFirstSymbol, playerSecondSymbol,
        gameMove, setWinCell, settingTurn, index } = props;

    let symbol;
    isFirstPlayer ? symbol = playerFirstSymbol : symbol = playerSecondSymbol
    gameMove(index)
    let winCell = winIndex(props, index, symbol)
    setWinCell(winCell);
    if (winCell == null) {
        settingTurn(!isFirstPlayer);
    }

}


function FieldСell(props) {
    const { mode, style, winCell, playingField, index } = props;
    const value = playingField[index.rowIndex][index.collIndex];
    switch (mode) {
        case modeEnum.pvp: {

            if (value !== symbolEnum.emptiness) {


                return (
                    <div style={{ width: style.size, height: style.size, backgroundColor: style.backgroundColor }}>
                        <img src={value === symbolEnum.zero ? circle : times} alt="" />
                    </div>)
            }

            if (winCell != null) {
                return (
                    <div style={{ width: style.size, height: style.size }}>

                    </div>
                )
            }

            return (
                <div onClick={() => click(props)} style={{ width: style.size, height: style.size }}>

                </div>
            )
        }

        case modeEnum.pve: {
            if (value !== symbolEnum.emptiness) {


                return (
                    <div style={{ width: style.size, height: style.size, backgroundColor: style.backgroundColor }}>
                        <img src={value === symbolEnum.zero ? circle : times} alt="" />
                    </div>)
            }

            if (winCell != null || !props.isFirstPlayer) {
                return (
                    <div style={{ width: style.size, height: style.size }}>

                    </div>
                )
            }

            return (
                <div onClick={() => click(props)} style={{ width: style.size, height: style.size }}>

                </div>
            )
        }

        default: {
            if (value !== symbolEnum.emptiness) {


                return (
                    <div style={{ width: style.size, height: style.size, backgroundColor: style.backgroundColor }}>
                        <img src={value === symbolEnum.zero ? circle : times} alt="" />
                    </div>)
            }

            return (
                <div style={{ width: style.size, height: style.size }}>

                </div>
            )
        }

    }


}

export default connect(mapStateToProps, mapDispatchToProps)(FieldСell);;