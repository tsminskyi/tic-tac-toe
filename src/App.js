import './App.css'
import { connect } from 'react-redux';
import mapStateToProps from './redux/mapStateToProps';
import mapDispatchToProps from './redux/mapDispatchToProps';
import GameBoard from './components/menu/boardSizeMenu';
import GameModes from './components/menu/modeMenu';
import GameSymbol from './components/menu/symbolMenu'
import PlayingField from './components/field/playingField';
import React from 'react'
import clickMenu from "./event/clickMenu"

const w = window.innerWidth;
const h = window.innerHeight;
const size = w > h ? h * 0.9 : w * 0.9


function App(props) {

    if (props.stateGame) {
        return (
            <div className="conteiner" style={{ width: size + "px", height: size + "px" }}>
                < PlayingField style={size} />
            </div>
        )

    }
    else {
        return (
            <div className="conteiner" style={{ width: size + "px", height: size + "px" }} onClick={(event)=>clickMenu(event,props)}>
                <GameBoard />
                <GameModes />
                <GameSymbol mode={props.mode}/>
                <button id="new_game" type="button" className="btn btn-danger">New Game</button>
            </div>
        )

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);