import React from 'react';
import "../Sidebar/Sidebar.scss";
import { useDispatch } from 'react-redux';

import { MdHome , MdHistory , MdThumbUp , MdLibraryBooks, MdExitToApp,MdSubscriptions, MdSentimentDissatisfied } from "react-icons/md";
import { log_out } from '../../redux/actions/auth.action';

const Sidebar = ({sidebar,handleTogglesidebar}) => {

const dispatch = useDispatch()

const handleLogOut=()=>{
    dispatch(log_out())
}


    return (

    

        <nav className={sidebar?"sidebar open":"sidebar"}
         onClick={()=>handleTogglesidebar()}
        >
           
            
            <li>
                <MdHome size={26}/>
                <span>Home</span>
            </li>
            <li>
                <MdSubscriptions size={26}/>
                <span>Subscription</span>
            </li>
            <hr/>
            <li>
                <MdLibraryBooks size={26}/>
                <span>Library</span>
            </li>
            
            <li>
                <MdHistory size={26}/>
                <span>History</span>
            </li>
            
            <li>
                <MdThumbUp size={26}/>
                <span>Liked Videos</span>
            </li>
            <li>
                <MdSentimentDissatisfied size={26}/>
                <span>I don't know</span>
            </li>
            <hr />
            <li  onClick={handleLogOut}>
                <MdExitToApp size={26}/>
                <span>LogOut</span>
            </li>
            <hr />
        </nav>
    )
}

export default Sidebar;
