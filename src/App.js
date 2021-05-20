import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import GameBoard from './components/menu/BoardSizeMenu';
import GameModes from './components/menu/GameModes';
import GameSymbol from './components/menu/SymbolsMenu';
import PlayingField from './components/field/PlayingField';
import clickMenu from './service/event/clickMenu';
import gameRules from './enum/gameRules';
import gameBoardSize from './enum/gameBoardSize';
import * as action from './redux/action';

function App(props) {

    const w = window.innerWidth;
    const h = window.innerHeight;
    const size = w > h ? h * 0.9 : w * 0.9;
    const { stateGame, mode } = props;

    if (stateGame) {

        return (
            <div className='conteiner' style={{ width: `${size}px`, height: `${size}px` }}>
                <PlayingField style={size} />
            </div>
        );

    }

    return (
        <div className='conteiner' style={{ width: `${size}px`, height: `${size}px` }}
            onClick={(event) => clickMenu(event, props)} role='presentation'>

            <GameBoard />
            <GameModes />
            <GameSymbol mode={mode} />
            <div className='conteiner__text'>
                <p className='text-uppercase'>rules</p>
                <p>{gameBoardSize.small} X {gameBoardSize.small}
                - need to place {gameRules.classic} identical symbols in a line
                </p>
                <p>{gameBoardSize.medium} X {gameBoardSize.medium} and {gameBoardSize.large}X{gameBoardSize.large}
                - need to place {gameRules.renju} and {gameRules.renjuHard}
                identical symbols in a line. The symbol can only be placed
                in the nearest empty cell around any already filled one.
                </p>
            </div>
            <button id='new_game' type='button'
                className='btn btn-danger'>New Game
            </button>
        </div>
    );

}

const mapStateToProps = (state) => {

    return {
        mode: state.mode,
        stateGame: state.stateGame,
        playingField: state.playingField,
        playerFirstSymbol: state.playerFirstSymbol
    };

};

const mapDispatchToProps = (dispatch) => {

    return {
        settingSizeField: (value) => dispatch(action.settingSizeField(value)),
        settingMode: (value) => dispatch(action.settingMode(value)),
        startNewGame: () => dispatch(action.newGame()),
        endGame: () => dispatch(action.endGame()),
        settingSymbol: (value) => dispatch(action.settingPlayerSymbol(value)),
        settingTurn: (value) => dispatch(action.settingTurn(value)),
        settingVictoryCells: (value) => dispatch(action.settingVictoryCells(value))
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
