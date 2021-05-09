import './App.css'
import { connect } from 'react-redux';
import mapStateToProps from './redux/mapStateToProps';
import mapDispatchToProps from './redux/mapDispatchToProps';
import GameBoard from './components/menu/setBoardSize';
import GameModes from './components/menu/setMode';
import GameSymbol from './components/menu/setSymbol'
import PlayingField from './components/field/playingField';
import React from 'react'

function start(props) {

    let setTurn = Math.floor(Math.random() * 2);
    if (props.playingField != null && props.mode != null && props.playerFirstSymbol != null) {
        props.settingTurn(Boolean(setTurn));
        props.startNewGame();
    }

}

function App(props) {

    if (props.stateGame) {
        return (
            <div className="conteiner">
                < PlayingField onClick={()=>console.log("11111")}/>
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