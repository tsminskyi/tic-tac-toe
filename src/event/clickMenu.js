import gameBoardSize from "../enum/gameBoardSize"
import gameMode from "../enum/gameMode"
import gameSymbols from "../enum/gameSymbols"

function clickMenu(event, props) {

    const { settingSizeField, settingMode, settingSymbol, playingField, 
        mode, playerFirstSymbol, settingTurn, startNewGame } = props;


    switch (event.target.id) {
        case gameBoardSize.large.toString(): settingSizeField(gameBoardSize.large)
            break;
        case gameBoardSize.medium.toString(): settingSizeField(gameBoardSize.medium)
            break;
        case gameBoardSize.small.toString(): settingSizeField(gameBoardSize.small)
            break;
        case gameMode.pvp: settingMode(gameMode.pvp)
            break;
        case gameMode.pve: settingMode(gameMode.pve)
            break;
        case gameMode.eve: settingMode(gameMode.eve)
            break;
        case gameSymbols.zero: settingSymbol(gameSymbols.zero)
            break;
        case gameSymbols.cross: settingSymbol(gameSymbols.cross)
            break;
        case "new_game": {
            if (playingField != null && mode != null && playerFirstSymbol != null) {
                let setTurn = Math.floor(Math.random() * 2);
                settingTurn(Boolean(setTurn));
                startNewGame();
            }
            break;
        }


        default:
            break;
    }

}
export default clickMenu