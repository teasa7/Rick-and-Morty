import thunk from "redux-thunk"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import charactersReducer from "./charactersReducer";


let reducers = combineReducers({
  charactersPage: charactersReducer
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;