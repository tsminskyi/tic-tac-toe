import symbolEnum from "../enum/gameSymbols"
export const reducer = function (state, action) {

    switch (action.type) {

        case "SETTING_SIZE_FIELD": {

            let value = symbolEnum.emptiness;
            let arr = new Array(Number(action.payload)).fill(new Array(Number(action.payload)).fill(value));
            return {
                ...state, size: action.payload, playingField: arr
            }
        }

        case "GAME_MOVE": {

            let newfieldValue = JSON.parse(JSON.stringify(state.playingField))
            let changeSymbol = null;
            state.isFirstPlayer ? changeSymbol = state.firstSymbol : changeSymbol = state.secondSymbol;
            newfieldValue[action.payload[0]][action.payload[1]] = changeSymbol;
            return {
                ...state, playingField: newfieldValue, isFirstPlayer: !state.isFirstPlayer
            }
        }

        case "SETTING_MODE": {
            return {
                ...state, mode: action.payload
            }
        }

        case "NEW_GAME": {
            return {
                ...state, newGame: action.payload
            }
        }

        default: return state;
    }
}