import { combineReducers } from "redux";
import { clientReducer } from "./client/client.reducer";
export const rootReducer = combineReducers({
    client : clientReducer
});