import './App.css'
import { connect } from 'react-redux';
import mapStateToProps from './redux/mapStateToProps';
import mapDispatchToProps from './redux/mapDispatchToProps';
import GameBoard from './components/menu/setBoardSize';
import GameModes from './components/menu/setMode';
import GameSymbol from './components/menu/setSymbol'
import PlayingField from './components/field/playingField';
import React from 'react'

const w = window.innerWidth;
const h = window.innerHeight;
const size = w > h ? h * 0.9 : w * 0.9
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
            <div className="conteiner" style={{ width: size + "px", height: size + "px" }}>
                < PlayingField style={size}/>
            </div>
        )

    }
    else {
        return (
            <div className="conteiner" style={{ width: size + "px", height: size + "px" }}>
                <GameBoard />
                <GameModes />
                <GameSymbol />
                <button onClick={() => start(props)}>New Game</button>
            </div>
        )

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);