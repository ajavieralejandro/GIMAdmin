import { combineReducers } from "redux";
import { clientReducer } from "./client/client.reducer";
import { cajaReducer } from "./caja/caja.reducer";
import { ventasReducer } from "./ventas/ventas.reducer";
import { clasesReducer } from "./Clases/clases.reducer";
import { userReducer } from "./user/user.reducer";
import { abonosReducer } from "./Abonos/abonos.reducer";
export const rootReducer = combineReducers({
    client : clientReducer,
    caja  : cajaReducer,
    ventas : ventasReducer,
    clases : clasesReducer,
    user : userReducer,
    abono: abonosReducer
});