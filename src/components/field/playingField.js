import { connect } from 'react-redux'
import mapStateToProps from '../../redux/mapStateToProps'
import mapDispatchToProps from '../../redux/mapDispatchToProps'
import FieldСell from "./fieldСell"
import InfoMenu from "../menu/infoMenu"
import React, { useEffect } from 'react';
import AI_move from "../../logic/AI/AI_move"

function PlayingField(props) {
    const {
        playingField, winCell } = props;

    let widthCell = Math.fround(100 / playingField[0].length);
    let color = 'transparent'

    useEffect(() => AI_move(props), [props]);


    return (
        <div className="conteiner" >
            <InfoMenu />
            <div className="conteiner__playing-field">

                {playingField.map((elem, row) => {
                    return (

                        elem.map((i, coll) => {


                            // filledCellsNearby(playingField)
                            if (winCell != null) {

                                color = 'transparent'
                                for (let i = 0; i < winCell.length; i++) {

                                    if (winCell[i].rowIndex === row && winCell[i].collIndex === coll) {
                                        color = 'red';
                                        break;
                                    }

                                }
                            }
                            return (

                                < FieldСell value={i} index={{ rowIndex: row, collIndex: coll }} key={coll + row} style={{ size: widthCell + '%', backgroundColor: color }} />

                            )
                        })
                    )
                })}
            </div>
        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayingField);