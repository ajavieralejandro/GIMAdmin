import { CAJA_ACTION_TYPES } from "./caja.action.types"
export const setCobroCaja = (cobro) =>{
    return(
        {
            type : CAJA_ACTION_TYPES.SET_COBRO_CAJA,
            payload : cobro
        }
    )
}

export const setCategoriaConcepto = (categoria ) =>{
    return(
        {
            type : CAJA_ACTION_TYPES.SET_CATEGORIA_CONCEPTO,
            payload : categoria
        }
    )
}

export const setConceptoCategoria = (concepto ) =>{
    return(
        {
            type : CAJA_ACTION_TYPES.SET_CONCEPTO,
            payload : concepto
        }
    )
}

export const setMovimientoInterno = (movimiento) =>{
    return(
        {
            type: CAJA_ACTION_TYPES.SET_MOVIMIENTO,
            payload:movimiento
        }
    )
}