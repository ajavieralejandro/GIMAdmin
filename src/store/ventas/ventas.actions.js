import { VENTAS_ACTION_TYPES } from "./ventas.action.types";

export const addActividad = (Actividad)=>{
    return(
        {
            type : VENTAS_ACTION_TYPES.ADD_ACTIVIDAD,
            payload : Actividad
        }
    )
}

export const deleteActividad = (Actividad)=>{
    return(
        {
            type : VENTAS_ACTION_TYPES.DELETE_ACTIVIDAD,
            payload : Actividad
        }
    )
}