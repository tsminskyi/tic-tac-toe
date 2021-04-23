import { createStore } from "redux";
import {reducer} from "./reduser";
import initialSate from "../redux/initialState"

const store = createStore(reducer, initialSate);

export default store;