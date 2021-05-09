
import store from "./store"
import settingSizeField from "./actionCreators/settingSizeField"
import gameMove from "./actionCreators/gameMove"
import settingMode from "./actionCreators/settingMode"
import newGame from "../redux/actionCreators/newGame"
import settingPlayerSymbol from "../redux/actionCreators/settingPlayerSymbol"
import settingTurn from "../redux/actionCreators/settingTurn"
import endGame from "../redux/actionCreators/endGame"
import setVictoryCells from "./actionCreators/setVictoryCells"

const mapDispatchToProps = () => {//добавить фильтр для отображения не всех данных

    return {
        settingSizeField: (value) => store.dispatch(settingSizeField(value)),
        settingMode: (value) => store.dispatch(settingMode(value)),
        gameMove: (value) => store.dispatch(gameMove(value)),
        startNewGame: () => store.dispatch(newGame()),
        endGame: () => store.dispatch(endGame()),
        settingSymbol: (value) => store.dispatch(settingPlayerSymbol(value)),
        settingTurn: (value) => store.dispatch(settingTurn(value)),
        setVictoryCells: (value) => store.dispatch(setVictoryCells(value))
    }

}
export default mapDispatchToProps;