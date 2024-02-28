import { CAJA_ACTION_TYPES } from "./caja.action.types"
export const setCobroCaja = (cobro) =>{
    return(
        {
            type : CAJA_ACTION_TYPES.SET_COBRO_CAJA,
            payload : cobro
        }
    )
}