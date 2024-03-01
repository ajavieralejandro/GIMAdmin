import { CLASES_ACTION_TYPES } from "./clases.actions.types"
export const addClase = (clase) =>{
    return(
        {
            type : CLASES_ACTION_TYPES.ADD_CLASE,
            payload : clase
        }
    )
}