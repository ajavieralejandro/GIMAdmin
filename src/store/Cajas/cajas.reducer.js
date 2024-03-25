import { CAJAS_ACTION_TYPES } from "./cajas.action.types";

const INITIAL_STATE = {
    cajas : [],
    cajaActual : null,

}

export const cajasReducer = (state = INITIAL_STATE,action)=>{
    const {type,payload } = action;
    switch(type){
        case CAJAS_ACTION_TYPES.ADD_CAJA:
            return{
                ...state,cajas:[...state.cajas,payload]
            }

            case CAJAS_ACTION_TYPES.SET_CAJA_ACTUAL:
                return{
                    ...state,cajaActual:payload
                }
       
      
            default : return state;
        
    }
}