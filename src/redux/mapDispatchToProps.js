
import store from "./store"
import settingSizeField from "./actionCreators/settingSizeField"
import gameMove from "./actionCreators/gameMove"
import settingMode from "./actionCreators/settingMode"
import newGame from "../redux/actionCreators/newGame"

const mapDispatchToProps = () => {

    return {
        settingSizeField: (value) => store.dispatch(settingSizeField(value)),
        settingMode: (value) => store.dispatch(settingMode(value)),
        gameMove: (value) => store.dispatch(gameMove(value)),
        startNewGame: () => store.dispatch(newGame())
    }

}
export default mapDispatchToProps;