
import { USER_ACTION_TYPES } from "./user.actions.types";

const INITIAL_STATE = {
    currentUser : null, 
    accessToken : ""

}



export const userReducer = (state = INITIAL_STATE,action)=>{
    const {type,payload } = action;
    switch(type){
            case (USER_ACTION_TYPES.SET_CURRENT_USER):
                {
                    return {...state, currentUser:action.payload,apiKey:action.payload.accessToken}

                }
            default : return state;
        
    }
}