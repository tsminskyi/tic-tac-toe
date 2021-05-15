import './App.css'
import { connect } from 'react-redux';
import mapStateToProps from './redux/mapStateToProps';
import mapDispatchToProps from './redux/mapDispatchToProps';
import GameBoard from './components/menu/BoardSizeMenu';
import GameModes from './components/menu/GameModes';
import GameSymbol from './components/menu/SymbolsMenu'
import PlayingField from './components/field/PlayingField';
import React from 'react'
import clickMenu from "./service/event/clickMenu"
import gameRules from "./enum/gameRules"
import gameBoardSize from "./enum/gameBoardSize"



function App(props) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const size = w > h ? h * 0.9 : w * 0.9


    if (props.stateGame) {
        return (
            <div className="conteiner" style={{ width: size + "px", height: size + "px" }}>
                < PlayingField style={size} />
            </div>
        )

    }
    else {
        return (
            <div className="conteiner" style={{ width: size + "px", height: size + "px" }} onClick={(event) => clickMenu(event, props)}>
                <GameBoard />
                <GameModes />
                <GameSymbol mode={props.mode} />
                <div className="conteiner__text">
                    <p className="text-uppercase">rules</p>
                    <p>{gameBoardSize.small}X{gameBoardSize.small} - need to place {gameRules.classic} identical symbols in a line</p>
                    <p>{gameBoardSize.medium}X{gameBoardSize.medium} and {gameBoardSize.large}X{gameBoardSize.large} - need to place {gameRules.renju} and {gameRules.renjuHard} identical symbols in a line. The symbol can only be placed in the nearest empty cell around any already filled one.</p>
                </div>
                <button id="new_game" type="button" className="btn btn-danger">New Game</button>
            </div>
        )

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);