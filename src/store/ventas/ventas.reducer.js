import { VENTAS_ACTION_TYPES } from "./ventas.action.types";
const INITIAL_STATE = {
    name : 'Actividades',
    actividades : [],

}

export const ventasReducer = (state = INITIAL_STATE,action)=>{
    const {type,payload } = action;
    switch(type){
        case VENTAS_ACTION_TYPES.ADD_ACTIVIDAD:
            return{
                ...state,actividades:[...state.actividades,payload]
            }
        case VENTAS_ACTION_TYPES.DELETE_ACTIVIDAD:
            return{
                ...state,actividades:state.actividades.filter(element=>element.nombre!=payload.nombre)
            }
      
            default : return state;
        
    }
}