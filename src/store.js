import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer from "./redux/Reducer/Reducer";
import { thunk } from "redux-thunk";

const allReducers = combineReducers({
    todos :counterReducer 
})
const store = createStore(allReducers, applyMiddleware(thunk))
export default store;