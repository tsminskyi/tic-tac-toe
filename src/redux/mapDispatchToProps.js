
import settingSizeField from "./actionCreators/settingSizeField"
import gameMove from "./actionCreators/gameMove"
import settingMode from "./actionCreators/settingMode"
import newGame from "../redux/actionCreators/newGame"
import settingPlayerSymbol from "../redux/actionCreators/settingPlayerSymbol"
import settingTurn from "../redux/actionCreators/settingTurn"
import endGame from "../redux/actionCreators/endGame"
import settingVictoryCells from "./actionCreators/settingVictoryCells"

const mapDispatchToProps = (dispatch) => {//добавить фильтр для отображения не всех данных

    return {
        settingSizeField: (value) => dispatch(settingSizeField(value)),
        settingMode: (value) => dispatch(settingMode(value)),
        gameMove: (value) => dispatch(gameMove(value)),
        startNewGame: () => dispatch(newGame()),
        endGame: () => dispatch(endGame()),
        settingSymbol: (value) => dispatch(settingPlayerSymbol(value)),
        settingTurn: (value) => dispatch(settingTurn(value)),
        settingVictoryCells: (value) => dispatch(settingVictoryCells(value))
    }

}
export default mapDispatchToProps;