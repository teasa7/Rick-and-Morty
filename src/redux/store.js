import thunk from "redux-thunk"
import { applyMiddleware, legacy_createStore } from "redux";

let store = legacy_createStore(applyMiddleware(thunk));

export default store;