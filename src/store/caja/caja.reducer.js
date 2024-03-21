import { CAJA_ACTION_TYPES } from "./caja.action.types";
const INITIAL_STATE = {
    name : 'Caja Lomas',
    cobros : [],
    categorias : [],
    conceptos:[],
    movimientos : []

}

export const cajaReducer = (state = INITIAL_STATE,action)=>{
    const {type,payload } = action;
    switch(type){
        case CAJA_ACTION_TYPES.SET_COBRO_CAJA:
            return{
                ...state,cobros:[...state.cobros,payload]
            }
         case CAJA_ACTION_TYPES.SET_CATEGORIA_CONCEPTO:
            return {
                ...state,categorias:[...state.categorias,payload]
            } 
        
            case CAJA_ACTION_TYPES.SET_CONCEPTO : 
            return{
                ...state,conceptos : [...state.conceptos,payload]
            }

            case CAJA_ACTION_TYPES.SET_MOVIMIENTO : 
            return {
                ...state,movimientos : [...state.movimientos,payload]
            }
      
            default : return state;
        
    }
}