
import store from "./store"
import settingSizeField from "./actionCreators/settingSizeField"
import gameMove from "./actionCreators/gameMove"
import settingMode from "./actionCreators/settingMode"
import newGame from "../redux/actionCreators/newGame"
import settingPlayerSymbol from "../redux/actionCreators/settingPlayerSymbol"
import settingTurn from "../redux/actionCreators/settingTurn"

const mapDispatchToProps = () => {

    return {
        settingSizeField: (value) => store.dispatch(settingSizeField(value)),
        settingMode: (value) => store.dispatch(settingMode(value)),
        gameMove: (value) => store.dispatch(gameMove(value)),
        startNewGame: () => store.dispatch(newGame()),
        settingSymbol: (value) => store.dispatch(settingPlayerSymbol(value)),
        settingTurn: (value) => store.dispatch(settingTurn(value))
    }

}
export default mapDispatchToProps;