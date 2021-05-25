import React from 'react';
import { connect } from 'react-redux';
import isMove from '../../service/isMove';
import ResultMenu from './ResultMenu';
import clickMenu from '../../service/event/clickMenu';
import TimeMenu from './TimeMenu';
import * as action from '../../redux/action';

const InfoMenu = (props) => {

    const {
        isFirstPlayer, playerFirstSymbol, playerSecondSymbol, victoryCells, playingField
    } = props;

    const turn = isFirstPlayer ? playerFirstSymbol : playerSecondSymbol;
    const emptyCells = isMove(playingField);
    const victory = victoryCells !== null;

    return (

        <div onClick={(event) => clickMenu(event, props)} role='presentation'>
            <div className='conteiner__menu'>
                <button id='back' type='button' className='btn btn-secondary'>Back</button>
                <div className='text-uppercase'>turn: {turn}</div>
                <TimeMenu victory={victory} emptyCells={emptyCells} />
            </div>
            <ResultMenu turn={turn} victory={victory} emptyCells={emptyCells} />
        </div>

    );

};

const mapStateToProps = (state) => {

    return {
        isFirstPlayer: state.isFirstPlayer,
        playerFirstSymbol: state.playerFirstSymbol,
        playerSecondSymbol: state.playerSecondSymbol,
        victoryCells: state.victoryCells,
        playingField: state.playingField,
        mode: state.mode
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoMenu);
