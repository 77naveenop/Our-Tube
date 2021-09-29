import { LOAD_PROFILE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOG_OUT } from "../actionTypes"

const initialState={
    accessToken:sessionStorage.getItem("otc-access-token")?sessionStorage.getItem("otc-access-token"):null,
    user:sessionStorage.getItem("otc-user")?JSON.parse(sessionStorage.getItem("otc-user")):null,
    loading:false,
}


export const authReducer=(prevState=initialState,action)=>{
 
    const{type,payload}=action

    switch(type){
        case LOGIN_REQUEST:
            return{
                ...prevState,
                loading:true,
    }

        case LOGIN_SUCCESS:return{
            ...prevState,
            accessToken:payload,
            loading:false,
        }

        case LOGIN_FAILED:return{
            ...prevState,
            loading:false,
            accessToken:null,
            Error:payload,
        }

        case LOAD_PROFILE:return{
            ...prevState,
            user:payload,
        }
        
         case LOG_OUT:return{
             ...prevState,
             accessToken:null,
             user:null,
       }       
        
            default:
                return prevState
                
    }





}