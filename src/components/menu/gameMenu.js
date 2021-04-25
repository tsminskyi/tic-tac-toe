import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';
import mapDispatchToProps from '../../redux/mapDispatchToProps';
import GameBoard from './setBoardSize';
import GameModes from './setMode';
import GameSymbol from './setSymbol'
import PlayingField from '../field/playingField';
import React from 'react'
// import isEmpty from "../../service/isEmpty"

function start(value) {

    let setTurn = Math.floor(Math.random() * 2);
    console.log(value)
    if (value.playingField != null && value.mode != null && value.playerFirstSymbol != null) {
        value.settingTurn(Boolean(setTurn));
        value.startNewGame()
    }

}

function GameMenu(props) {
    if (props.newGame) {
        return (
            <div className="conteiner">
                < PlayingField />
            </div>
        )

    }
    else {
        return (
            <div className="conteiner">
                <GameBoard />
                <GameModes />
                <GameSymbol />
                <button onClick={() => start(props)}>New Game</button>
            </div>
        )

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(GameMenu);