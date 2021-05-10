import { connect } from 'react-redux'
import mapStateToProps from '../../redux/mapStateToProps'
import mapDispatchToProps from '../../redux/mapDispatchToProps'
import FieldСell from "./fieldСell"
import InfoMenu from "../menu/infoMenu"
import React, { useEffect } from 'react';
import AI_move from "../../logic/AI/AI_move"
import clickWithRules from "../../event/clickWithRules"
const w = window.innerWidth;
const h = window.innerHeight;
const size = w > h ? h * 0.9 : w * 0.9

function PlayingField(props) {
    const { playingField, victoryCells } = props;

    let widthCell = Math.fround(100 / playingField[0].length);
    let color = 'transparent'

    useEffect(() => AI_move(props), [props]);



    return (
        <div className="conteiner" style={{ width: size + "px", height: size + "px" }}>
            <InfoMenu />
            <div className="conteiner__playing-field" onClick={(event) => clickWithRules(event, props)}>

                {playingField.map((elem, row) => {
                    return (

                        elem.map((value, coll) => {


                            // filledCellsNearby(playingField)
                            if (victoryCells != null) {

                                color = 'transparent'
                                for (let i = 0; i < victoryCells.length; i++) {

                                    if (victoryCells[i].rowIndex === row && victoryCells[i].collIndex === coll) {
                                        color = 'red';
                                        break;
                                    }

                                }
                            }
                            return (

                                < FieldСell value={value} index={{ rowIndex: row, collIndex: coll }} key={coll + row} style={{ size: widthCell + '%', backgroundColor: color }} />

                            )
                        })
                    )
                })}
            </div>
        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayingField);