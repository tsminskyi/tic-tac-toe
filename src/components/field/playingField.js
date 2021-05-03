import { connect } from 'react-redux'
import mapStateToProps from '../../redux/mapStateToProps'
import FieldСell from "./fieldСell"
import InfoMenu from "../menu/infoMenu"
import React from "react"
import modeEnum from "../../enum/gameMode"


function PlayingField(props) {
    let widthCell = Math.fround(100 / props.playingField[0].length);
    let color = 'transparent'

    // if (this.props.mode === modeEnum.eve) {

    //     let currentSymbol = null;

    //     this.props.isFirstPlayer ? currentSymbol = this.props.playerFirstSymbol : currentSymbol = this.props.playerSecondSymbol
    // }
    // if (this.props.mode === modeEnum.pve) {

    //     if (!this.props.isFirstPlayer) {

    //     }

    // }



    return (
        <div className="conteiner" >
            <InfoMenu />
            <div className="conteiner__playing-field">

                {props.playingField.map((elem, row) => {
                    return (

                        elem.map((i, coll) => {

                            if (props.winCell != null) {

                                color = 'transparent'
                                for (let i = 0; i < props.winCell.length; i++) {

                                    if (props.winCell[i].rowIndex === row && props.winCell[i].collIndex === coll) {
                                        color = 'red';
                                        break;
                                    }

                                }
                            }
                            return (

                                < FieldСell value={i} state={props.stateGame} index={{ rowIndex: row, collIndex: coll }} key={coll + row} style={{ size: widthCell + '%', backgroundColor: color }} />

                            )
                        })
                    )
                })}
            </div>
        </div>

    )
}

export default connect(mapStateToProps)(PlayingField);