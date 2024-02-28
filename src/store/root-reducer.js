import { combineReducers } from "redux";
import { clientReducer } from "./client/client.reducer";
import { cajaReducer } from "./caja/caja.reducer";
export const rootReducer = combineReducers({
    client : clientReducer,
    caja  : cajaReducer
});