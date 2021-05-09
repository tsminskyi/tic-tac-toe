import { connect } from 'react-redux'
import mapStateToProps from '../../redux/mapStateToProps'
import mapDispatchToProps from '../../redux/mapDispatchToProps'
import FieldСell from "./fieldСell"
import InfoMenu from "../menu/infoMenu"
import React, { useEffect } from 'react';
import AI_move from "../../logic/AI/AI_move"
import winIndex from "../../logic/winLogic"

function PlayingField(props) {
    const { playingField, victoryCells } = props;

    let widthCell = Math.fround(100 / playingField[0].length);
    let color = 'transparent'

    useEffect(() => AI_move(props), [props]);

    function click(event, props) {

        const { isFirstPlayer, playerFirstSymbol, playerSecondSymbol,
            gameMove, setVictoryCells, settingTurn, gameRule, victoryCells } = props;
        const playingField = props.playingField;
        if (victoryCells == null) {
            const [row, coll] = event.target.id.split('.');
            const indexObj = { rowIndex: Number(row), collIndex: Number(coll) };
            const symbol = isFirstPlayer ? playerFirstSymbol : playerSecondSymbol;

            gameMove(indexObj);
            const winCells = winIndex(playingField, indexObj, symbol, gameRule);
            setVictoryCells(winCells);
            if (victoryCells == null) {
                settingTurn(!isFirstPlayer);
            }
        }

    }

    return (
        <div className="conteiner" >
            <InfoMenu />
            <div className="conteiner__playing-field" onClick={(event) => click(event, props)}>

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