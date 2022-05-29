import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'

const initState = {
    loading : true,
    error : false,
    data : null
}

const githubAction = {
    "fetch" : "fetch",
    "success" : "success",
    "failure" : "failure"
}

const githubReducer = (state, action) => {
    switch(action.type){
        case githubAction.fetch : {
            return (
                {
                    ...state,
                    loading : true,
                    error : false,
                    data : null
                }
            )
        }
        case githubAction.success : {
            return (
                {
                    ...state,
                    loading : false,
                    error : false,
                    data : action.payload
                }
            )
        }
        case githubAction.failure : {
            return (
                {
                    ...state,
                    loading : false,
                    error : true
                }
            )
        }
        default : 
            return state;
    }
}

export const Github = () => {
    const [{loading,error,data},dispatch] = useReducer(githubReducer,initState);
    const [name, setName] = useState("");

    useEffect(() => {
        dispatch({
            type : githubAction.fetch
        })
        axios({
            method : "GET",
            url : "https://api.github.com/search/users",
            params : {
                q : name,
                per_page : 8,
            }
        })
        .then(res => {
            dispatch({
                type : githubAction.success,
                payload : res.data
            })
        })
        .catch(err => {
            dispatch({
                type : githubAction.failure
            })
        })
    },[name])
    
    console.log(data)
  return (
    <div>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        {loading && <div>Loading...</div>}
        {error && <div>Error</div>}
        {
            data?.items.map((item) => (
                <div style={{display:"flex", width:"300px", margin:"auto"}} key={item.id}>
                    <img style={{width:"40px",borderRadius:"50%", marginRight:"10px"}} src={item.avatar_url} alt="" />
                    <h3>Git_Id : {item.login}</h3>
                </div>
            ))
        }
    </div>
  )
}
