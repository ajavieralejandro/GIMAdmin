
import { USER_ACTION_TYPES } from "./user.actions.types";

const INITIAL_STATE = {
    currentUser : null, 
    token : ""

}



export const userReducer = (state = INITIAL_STATE,action)=>{
    const {type,payload } = action;
    switch(type){
            case (USER_ACTION_TYPES.SET_CURRENT_USER):
                {
                    return {...state, currentUser:payload,token:payload.token}

                }
            case (USER_ACTION_TYPES.LOGOUT_USER) :
                {
                    return{...state,currentUser:null,token:null}
                }
            default : return state;
        
    }
}