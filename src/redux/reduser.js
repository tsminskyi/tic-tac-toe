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
            state.isFirstPlayer ? changeSymbol = state.playerFirstSymbol : changeSymbol = state.playerSecondSymbol;
            newfieldValue[action.payload.collIndex][action.payload.rowIndex] = changeSymbol;
            return {
                ...state, playingField: newfieldValue, isFirstPlayer: !state.isFirstPlayer
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
            console.log(second)
            return {
                ...state, playerFirstSymbol: action.payload, playerSecondSymbol: second
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