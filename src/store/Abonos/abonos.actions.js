import { ABONOS_ACTION_TYPES } from "./abonos.action.types"
export const setCurrentAbono= (abono) =>{
    return(
        {
            type : ABONOS_ACTION_TYPES.SET_CURRENT_ABONO,
            payload : abono
        });

}