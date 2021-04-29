import './App.css'
import { connect } from 'react-redux';
import mapStateToProps from './redux/mapStateToProps';
import mapDispatchToProps from './redux/mapDispatchToProps';
import GameBoard from './components/menu/setBoardSize';
import GameModes from './components/menu/setMode';
import GameSymbol from './components/menu/setSymbol'
import PlayingField from './components/field/playingField';
import React from 'react'

function start(value) {

    let setTurn = Math.floor(Math.random() * 2);
    if (value.playingField != null && value.mode != null && value.playerFirstSymbol != null) {
        value.settingTurn(Boolean(setTurn));
        value.startNewGame();
    }

}

function App(props) {

    if (props.stateGame) {
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
export default connect(mapStateToProps, mapDispatchToProps)(App);