import { combineReducers, createStore } from "redux";
import { AuthReducers } from "../reducers/AuthReducers";

const reducers = combineReducers({
    auth: AuthReducers,
})

export const store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )