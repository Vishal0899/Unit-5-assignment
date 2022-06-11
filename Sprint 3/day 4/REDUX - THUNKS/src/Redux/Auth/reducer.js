import { actions } from "./action"

export const initState = {
    laoding: false,
    details:{},
    error:false
}
export const authReducer = (state=initState,{type,payload}) =>{
    switch(type){
        case actions.REGISTER_REQUEST:{
            return{
                ...state,
                loading: true,
                error: false
            }
        }
        case actions.REGISTER_SUCCESS:{
            return{
                ...state,
                loading: false,
                details:payload,
                error: false
            }
        }
        case actions.REGISTER_FAILURE:{
            return{
                ...state,
                loading: false,
                error: true
            }
        }
        default:{
            return state
        }
    }
}