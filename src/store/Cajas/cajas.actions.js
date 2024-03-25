import { CAJAS_ACTION_TYPES } from "./cajas.action.types";

export const setCajaActual = (caja) =>{
    return(
        {
            type: CAJAS_ACTION_TYPES.SET_CAJA_ACTUAL,
            payload : caja
        }
    )
}

export const addCaja = (caja) =>{
    return(
        {
            type: CAJAS_ACTION_TYPES.ADD_CAJA,
            payload : caja
        }
    )
}
