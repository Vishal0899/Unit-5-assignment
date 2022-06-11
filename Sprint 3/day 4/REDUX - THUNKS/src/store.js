import {combineReducers, legacy_createStore as createStore} from "redux";
import { authReducer } from "./Redux/Auth/reducer";
const rootReducer = combineReducers({
    authReducer:authReducer,
    // gitUserReducer:gitUserReducer,
})
export const store = createStore(rootReducer)