import gameBoardSize from "../../enum/gameBoardSize"
import gameMode from "../../enum/gameMode"
import gameSymbols from "../../enum/gameSymbols"

const highlight = (elem) => {

    if (elem.hasAttribute('type')) {
        elem.parentElement.childNodes.forEach(element => {
            element.classList.remove("btn-info")
        });
        elem.classList.add("btn-info")
    }

}

const clickMenu = (event, props) => {
    const { settingSizeField, settingMode, settingSymbol, playingField,
        mode, playerFirstSymbol, settingTurn, startNewGame, endGame } = props;

    highlight(event.target)

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
        case gameMode.eve: {
            settingSymbol(null)
            settingMode(gameMode.eve)
            break;
        }
        case gameSymbols.zero: settingSymbol(gameSymbols.zero)
            break;
        case gameSymbols.cross: settingSymbol(gameSymbols.cross)
            break;
        case "new_game": {
            if (playingField != null && mode != null && playerFirstSymbol != null) {
                let setTurn = playerFirstSymbol === gameSymbols.cross ? true : false
                settingTurn(setTurn);
                startNewGame();
            }
            break;
        }
        case "back":
        case "back_from_result": {
            endGame();
            break;
        }


        default:
            break;
    }

}
export default clickMenu