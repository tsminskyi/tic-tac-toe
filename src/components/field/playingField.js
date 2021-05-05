import { connect } from 'react-redux'
import mapStateToProps from '../../redux/mapStateToProps'
import mapDispatchToProps from '../../redux/mapDispatchToProps'
import FieldСell from "./fieldСell"
import InfoMenu from "../menu/infoMenu"
import React, { useEffect } from 'react';
import modeEnum from "../../enum/gameMode"
import AI from "../../logic/AI/AI"
import winIndex from "../../logic/winLogic"

function PlayingField(props) {
    let widthCell = Math.fround(100 / props.playingField[0].length);
    let color = 'transparent'

    useEffect(() => {

        if (props.mode === modeEnum.eve) {

            let currentSymbol = null;

            props.isFirstPlayer ? currentSymbol = props.playerFirstSymbol : currentSymbol = props.playerSecondSymbol
        }
        if (props.mode === modeEnum.pve) {

            if (!props.isFirstPlayer || props.isFirstPlayer == null) {

                let move = AI(props, props.playerSecondSymbol);

                if (move != null && props.winCell == null) {

                    let symbol;
                    props.isFirstPlayer ? symbol = props.playerFirstSymbol : symbol = props.playerSecondSymbol
                    props.gameMove(move);
                    let winCell = winIndex(props, move, symbol)
                    props.setWinCell(winCell);
                    if (winCell == null) {
                        props.settingTurn(!props.isFirstPlayer);
                    }
                }

            }

        }
    }, [props]);


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

export default connect(mapStateToProps, mapDispatchToProps)(PlayingField);