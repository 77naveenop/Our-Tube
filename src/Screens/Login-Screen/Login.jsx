import React from 'react';

import Ot from "../Login-Screen/OurTubeLogo.png";
import "../Login-Screen/Login.scss";
import { useDispatch , useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { login } from '../../redux/actions/auth.action';


const Login = () => {

    const dispatch = useDispatch()

    const accesstoken= useSelector(state => state.auth.accessToken)

    const history = useHistory()
   
   useEffect(() => {
           if(accesstoken){
history.push("/")
           }
       }
, [accesstoken,history])

    const handleLogin=()=>{
        dispatch(login())
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={Ot} alt="" />
                <button onClick={handleLogin}>Login with Google</button>
                <p>This project is made using youtube data API</p>
            </div>
        </div> 
    )
}

export default Login;
