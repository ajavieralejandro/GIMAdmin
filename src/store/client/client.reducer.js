export const CLIENT_ACTION_TYPES = {
    SET_CURRENT_CLIENT : 'SET_CURRENT_CLIENT'
}

const INITIAL_STATE = {
    currentClient : null,

}

export const clientReducer = (state = INITIAL_STATE,action)=>{
    const {type,payload } = action;
    switch(type){
        case CLIENT_ACTION_TYPES.SET_CURRENT_CLIENT:
            return{
                ...state,currentClient:payload
            }
            default : return state;
        
    }
}