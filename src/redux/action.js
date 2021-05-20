import * as actionType from './action-types';

export const endGame = () => {

    return {
        type: actionType.END_GAME,
        payload: false
    };

};

export const gameMove = (indexObj) => {

    return {
        type: actionType.GAME_MOVE,
        payload: indexObj
    };

};

export const newGame = () => {

    return {
        type: actionType.NEW_GAME,
        payload: true
    };

};

export const settingMode = (value) => {

    return {
        type: actionType.SETTING_MODE,
        payload: value
    };

};

export const settingPlayerSymbol = (value) => {

    return {
        type: actionType.SETTING_PLAYER_SYMBOL,
        payload: value
    };

};

export const settingSizeField = (size) => {

    return {
        type: actionType.SETTING_SIZE_FIELD,
        payload: size
    };

};

export const settingTurn = (value) => {

    return {
        type: actionType.SETTING_TURN,
        payload: value
    };

};

export const settingVictoryCells = (value) => {

    return {
        type: actionType.SETTING_VICTORY_CELL,
        payload: value
    };

};
