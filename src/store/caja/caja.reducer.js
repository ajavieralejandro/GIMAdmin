import { CAJA_ACTION_TYPES } from "./caja.action.types";
const INITIAL_STATE = {
    name : 'Caja Lomas',
    cobros : [],

}

export const cajaReducer = (state = INITIAL_STATE,action)=>{
    const {type,payload } = action;
    switch(type){
        case CAJA_ACTION_TYPES.SET_COBRO_CAJA:
            return{
                ...state,cobros:[...state.cobros,payload]
            }
      
            default : return state;
        
    }
}