import { CLIENT_ACTION_TYPES } from "./client.action.types"
export const setCurrentClient = (Client) =>{
    return ({
        type : CLIENT_ACTION_TYPES.SET_CURRENT_CLIENT,
        payload : Client
    })

}