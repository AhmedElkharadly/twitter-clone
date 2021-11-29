import React from "react";
import { NavLink } from "react-router-dom";
import {twiticon, homeic, exploreic, notificationic, messagesic, profileic, bookmarkic, listic, moreic, tweetic} from './svg'
import './leftpane.css'

const LeftPane = (props) => {
    return ( 
        <div className='leftpane'>
            <div className='containerx'>
            <header>
                {twiticon}
            </header>
            <nav>
                <NavLink to="/home" activeStyle={{ color: "blue" }}>
                <span>{homeic} Home</span>
                </NavLink>
                <NavLink to="/explore" activeStyle={{ color: "blue" }}>
                <span>{exploreic}Explore</span>
                </NavLink>
                <NavLink to="/notifications" activeStyle={{ color: "blue" }}>
                <span>{notificationic} Notification</span>
                </NavLink>
                <NavLink to="/messages" activeStyle={{ color: "blue" }}>
                <span>{messagesic} Messages</span>
                </NavLink>
                <NavLink to="/bookmarks" activeStyle={{ color: "blue" }}>
                <span>{bookmarkic} Bookmarks</span>
                </NavLink>
                <NavLink to="/lists" activeStyle={{ color: "blue" }}>
                <span>{listic} Lists</span>
                </NavLink>
                <NavLink to="/profile" activeStyle={{ color: "blue" }}>
                <span>{profileic} Profile</span>
                </NavLink>
                <button className="more">
                    <span>{moreic} More</span>
                </button>
            </nav>

            <button className='tweet'>{tweetic} Tweet </button>

            <footer>
                <button className='account'>
                <div className='photo'>
                    <img alt="Ahmed Ehab Elkharadly"  
                    src="https://pbs.twimg.com/profile_images/1460683916461973515/KbDeIpYx_normal.jpg" />
                </div>
                <div className='name'>
                    Ahmed Ehab Elkharadly
                    <span className='username'>@Elkharadliation</span>
                </div>
                </button>
            </footer>
            </div>
        </div>
    );
}
 
export default LeftPane;