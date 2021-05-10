import symbolEnum from "../enum/gameSymbols"
import ruleEnum from "../enum/gameRules"
import boardSizeEnum from "../enum/gameBoardSize"
export const reducer = function (state, action) {

    switch (action.type) {

        case "SETTING_SIZE_FIELD": {

            let value = symbolEnum.emptiness;
            let arr = new Array(Number(action.payload)).fill(new Array(Number(action.payload)).fill(value));

            let setRule = null;
            switch (action.payload) {
                case boardSizeEnum.medium: setRule = ruleEnum.renju; break;
                case boardSizeEnum.large: setRule = ruleEnum.renjuHard; break;
                default: setRule = ruleEnum.classic; break;
            }
            return {
                ...state, size: action.payload, playingField: arr, gameRule: setRule
            }
        }

        case "GAME_MOVE": {

            let newfieldValue = JSON.parse(JSON.stringify(state.playingField))
            let changeSymbol = null;
            state.isFirstPlayer ? changeSymbol = state.playerFirstSymbol : changeSymbol = state.playerSecondSymbol;
            newfieldValue[action.payload.rowIndex][action.payload.collIndex] = changeSymbol;
            return {
                ...state, playingField: newfieldValue, isFirstClick: false
            }
        }

        case "SETTING_MODE": {
            return {
                ...state, mode: action.payload
            }
        }

        case "SETTING_TURN": {
            return {
                ...state, isFirstPlayer: action.payload
            }
        }

        case "SETTING_PLAYER_SYMBOL": {

            let second;
            action.payload === symbolEnum.cross ? second = symbolEnum.zero : second = symbolEnum.cross
            return {
                ...state, playerFirstSymbol: action.payload, playerSecondSymbol: second
            }
        }

        case "NEW_GAME": {
            return {
                ...state, stateGame: action.payload
            }
        }

        case "SETTING_VICTORY_CELL": {
            return {
                ...state, victoryCells: action.payload
            }
        }

        case "END_GAME": {
            return {
                stateGame: action.payload
            }
        }

        default: return state;
    }
}