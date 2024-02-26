import { CLIENT_ACTION_TYPES } from "./client.action.types"
export const setCurrentClient = (Client) =>{
    return ({
        type : CLIENT_ACTION_TYPES.SET_CURRENT_CLIENT,
        payload : Client
    })

}

export const setClientCobro = (Cobro)=>{
    return(
        {
            type : CLIENT_ACTION_TYPES.SET_CLIENT_COBRO,
            payload : Cobro
        }
    )
}


export const cancelClientCobro = ()=>{
    return(
        {
            type : CLIENT_ACTION_TYPES.CANCEL_CLIENT_COBRO
        }
    )
}