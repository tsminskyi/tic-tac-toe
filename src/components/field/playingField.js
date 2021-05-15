import { connect } from 'react-redux'
import FieldСell from "./FieldCell"
import InfoMenu from "../menu/InfoMenu"
import { useEffect } from 'react';
import AI_move from "../../service/logic/AI/AI_move"
import clickWithRules from "../../service/event/clickWithRules"
import gameMode from "../../enum/gameMode"
import * as action from "../../redux/action"
const PlayingField = (props) => {

    const w = window.innerWidth;
    const h = window.innerHeight;
    const size = w > h ? h * 0.9 : w * 0.9
    const { playingField, victoryCells, isFirstPlayer, mode } = props;

    let widthCell = Math.fround(100 / playingField[0].length);
    let color = 'transparent'

    useEffect(() => {
        if (mode !== gameMode.pvp) {
            setTimeout(() => AI_move(props), 500)
        }
    }, [isFirstPlayer]);


    return (
        <div style={{ width: size + "px", height: size + "px" }}>
            <InfoMenu />
            <div className="conteiner__playing-field" onClick={(event) => clickWithRules(event, props)}>

                {playingField.map((elem, row) => {
                    return (

                        elem.map((value, coll) => {

                            let currentIndexObj = { rowIndex: row, collIndex: coll };
                            if (victoryCells != null) {

                                color = 'transparent'

                                const findCell = victoryCells
                                    .map((elem) => elem.rowIndex + " " + elem.collIndex)
                                    .indexOf(currentIndexObj.rowIndex + " " + currentIndexObj.collIndex)
                                if (findCell >= 0) color = 'red';

                            }
                            return (

                                < FieldСell value={value} index={currentIndexObj} key={coll + row} style={{ size: widthCell + '%', backgroundColor: color }} />

                            )
                        })
                    )
                })}
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        playingField: state.playingField,
        isFirstPlayer: state.isFirstPlayer,
        victoryCells: state.victoryCells,
        gameRule: state.gameRule,
        mode: state.mode,
        isFirstClick: state.isFirstClick,
        playerFirstSymbol: state.playerFirstSymbol,
        playerSecondSymbol: state.playerSecondSymbol,
        gameMove: state.gameMove,

        stateGame:state.stateGame,
        size:state.size
    }
}


const mapDispatchToProps = (dispatch) => {

    return {
        settingSizeField: (value) => dispatch(action.settingSizeField(value)),
        settingMode: (value) => dispatch(action.settingMode(value)),
        startNewGame: () => dispatch(action.newGame()),
        endGame: () => dispatch(action.endGame()),
        settingSymbol: (value) => dispatch(action.settingPlayerSymbol(value)),
        settingTurn: (value) => dispatch(action.settingTurn(value)),
        settingVictoryCells: (value) => dispatch(action.settingVictoryCells(value)),
        gameMove: (value) => dispatch(action.gameMove(value))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PlayingField);