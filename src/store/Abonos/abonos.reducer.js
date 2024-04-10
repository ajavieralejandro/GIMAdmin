import { ABONOS_ACTION_TYPES } from "./abonos.action.types";

const INITIAL_STATE = {
    current_abono : null
}

export const abonosReducer = (state = INITIAL_STATE,action)=>{
    const {type,payload } = action;
    switch(type){

            case(ABONOS_ACTION_TYPES.SET_CURRENT_ABONO):
                return{...state,current_abono : payload}
            

            default : return state;
        
    }
}