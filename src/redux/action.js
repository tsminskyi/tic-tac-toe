import * as actionType  from "./action-types"

export const endGame = function () {
    return {
        type: actionType.END_GAME,
        payload: false
    }
}

export const gameMove = function (indexObj) {
    return {
        type: actionType.GAME_MOVE,
        payload: indexObj
    }
}

export const newGame = function () {
    return {
        type: actionType.NEW_GAME,
        payload: true
    }
}

export const settingMode = function (value) {
    return {
        type: actionType.SETTING_MODE,
        payload: value
    }
}

export const settingPlayerSymbol = function (value) {
    return {
        type: actionType.SETTING_PLAYER_SYMBOL,
        payload: value
    }
}

export const settingSizeField = function (size) {
    return {
        type: actionType.SETTING_SIZE_FIELD,
        payload: size
    }
}

export const settingTurn = function (value) {
    return {
        type: actionType.SETTING_TURN,
        payload: value
    }
};

export const settingVictoryCells = function (value) {
    return {
        type: actionType.SETTING_VICTORY_CELL,
        payload: value
    }
}