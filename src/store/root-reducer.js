import { combineReducers } from "redux";
import { clientReducer } from "./client/client.reducer";
import { cajaReducer } from "./caja/caja.reducer";
import { ventasReducer } from "./ventas/ventas.reducer";
export const rootReducer = combineReducers({
    client : clientReducer,
    caja  : cajaReducer,
    ventas : ventasReducer
});