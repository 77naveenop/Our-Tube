import React from 'react';
import "../Header/Header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import OT from "../Header/OurTubeLogo.png";

const Header = ({handleTogglesidebar}) => {
    return (
        <div className="header">
            <FaBars className="header__menu" size={24} 
             onClick={handleTogglesidebar}
            />
            <img src={OT} alt="" className="header__logo" />
            <form><input type="text" placeholder="Search" />
                <button type="submit">
                    <AiOutlineSearch size={26} />
                </button>
            </form>
            <div className="header__icons">
                <MdNotifications size={28}/>
                <MdApps size={22} />
                <img src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png" alt="" />
            </div>

        </div>
    )
}

export default Header;
