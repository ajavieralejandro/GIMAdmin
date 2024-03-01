import { CLASES_ACTION_TYPES } from "./clases.actions.types";
const INITIAL_STATE = {
    clases : [],

}

export const clasesReducer = (state = INITIAL_STATE,action)=>{
    const {type,payload } = action;
    switch(type){
        case CLASES_ACTION_TYPES.ADD_CLASE:
            return{
                ...state,clases:[...state.clases,payload]
            }
      
            default : return state;
        
    }
}