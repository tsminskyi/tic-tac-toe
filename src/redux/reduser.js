import symbolEnum from "../enum/gameSymbols"
import ruleEnum from "../enum/gameRules"
import boardSizeEnum from "../enum/gameBoardSize"
import * as actionType  from "./action-types"

const reducer = function (state, action) {

    switch (action.type) {

        case actionType.SETTING_SIZE_FIELD: {

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

        case actionType.GAME_MOVE: {

            let newfieldValue = JSON.parse(JSON.stringify(state.playingField))
            let changeSymbol = null;
            state.isFirstPlayer ? changeSymbol = state.playerFirstSymbol : changeSymbol = state.playerSecondSymbol;
            newfieldValue[action.payload.rowIndex][action.payload.collIndex] = changeSymbol;
            return {
                ...state, playingField: newfieldValue, isFirstClick: false
            }
        }

        case actionType.SETTING_MODE: {
            return {
                ...state, mode: action.payload
            }
        }

        case actionType.SETTING_TURN: {
            return {
                ...state, isFirstPlayer: action.payload
            }
        }

        case actionType.SETTING_PLAYER_SYMBOL: {
            if (action.payload == null) {
                return {
                    ...state, playerFirstSymbol: symbolEnum.cross, playerSecondSymbol: symbolEnum.zero
                }
            }
            let second = action.payload === symbolEnum.cross ? symbolEnum.zero : symbolEnum.cross
            return {
                ...state, playerFirstSymbol: action.payload, playerSecondSymbol: second
            }
        }

        case actionType.NEW_GAME: {
            return {
                ...state, stateGame: action.payload
            }
        }

        case actionType.SETTING_VICTORY_CELL: {
            return {
                ...state, victoryCells: action.payload
            }
        }

        case actionType.END_GAME: {
            return {
                stateGame: action.payload, isFirstClick: true, victoryCells: null
            }
        }


        default: return state;
    }
}
export default reducer