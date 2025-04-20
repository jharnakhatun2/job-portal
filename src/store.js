import { createStore } from "redux";
import counterReducer from "./redux/Reducer/Reducer";

const store = createStore(counterReducer)
export default store;