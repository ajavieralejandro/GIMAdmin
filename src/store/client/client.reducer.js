import { CLIENT_ACTION_TYPES } from "./client.action.types";
const INITIAL_STATE = {
    currentClient : null,
    cobros : [],

}

export const clientReducer = (state = INITIAL_STATE,action)=>{
    const {type,payload } = action;
    switch(type){
        case CLIENT_ACTION_TYPES.SET_CURRENT_CLIENT:
            return{
                ...state,currentClient:payload
            }
         case CLIENT_ACTION_TYPES.SET_CLIENT_COBRO:
            return{
                ...state,cobros:[...state.cobros,payload]
            }
        case CLIENT_ACTION_TYPES.CANCEL_CLIENT_COBRO:
            return{
                ...state,cobros:[]
            }
            default : return state;
        
    }
}