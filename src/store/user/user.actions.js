import { USER_ACTION_TYPES } from "./user.actions.types"
export const setCurrentUser = (User) =>{
    return ({
        type : USER_ACTION_TYPES.SET_CURRENT_USER,
        payload : User
    })

}