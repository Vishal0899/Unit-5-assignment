import axios from "axios"
export const actions  = {
    REGISTER_REQUEST : "REGISTER_REQUEST",
    REGISTER_SUCCESS : "REGISTER_SUCCESS",
    REGISTER_FAILURE : "REGISTER_FAILURE"
}
export const registerRequestAction = ()=>(
    { 
       type:actions.REGISTER_REQUEST
    }
)
export const registerSuccessAction = (data)=>(
    {
        type:actions.REGISTER_SUCCESS,
        payload:data
    }
)
export const registerFailureAction = (data)=>(
    {
        type:actions.REGISTER_REQUEST
    }
)

export const setDetails = ({form, dispatch})=>{
    dispatch(registerRequestAction())
    axios({
        url: "https://masai-api-mocker.herokuapp.com/auth/register",
        method: "POST",
        data: form,

    }).then(res=>{
        dispatch(registerSuccessAction(res.data));
    }).catch(err=>{
        dispatch(registerFailureAction())
    })

}