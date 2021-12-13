import React from "react";
import { Link, NavLink } from "react-router-dom";
import {twiticon, homeic, exploreic, notificationic, messagesic, profileic, bookmarkic, listic, moreic, tweetic} from './svg'
import './leftpane.css'

const LeftPane = (props) => {
    
    return ( 
        <div className='leftpane'>
            <div className='containerx'>
                <header>
                    <Link to='/home'>{twiticon}</Link>
                </header>
                <nav>
                    <NavLink to="/home"  activestyle={{color: "red"}}>
                        <span>{homeic} Home</span>
                    </NavLink>
                    <NavLink to="/explore" activestyle={{ color: "blue" }}>
                        <span>{exploreic}Explore</span>
                    </NavLink>
                    <NavLink to="/notifications" activestyle={{ color: "blue" }}>
                        <span>{notificationic} Notification</span>
                    </NavLink>
                    <NavLink to="/messages" activestyle={{ color: "blue" }}>
                        <span>{messagesic} Messages</span>
                    </NavLink>
                    <NavLink to="/bookmarks" activestyle={{ color: "blue" }}>
                        <span>{bookmarkic} Bookmarks</span>
                    </NavLink>
                    <NavLink to="/lists" activestyle={{ color: "blue" }}>
                        <span>{listic} Lists</span>
                    </NavLink>
                    <NavLink to="/profile" activestyle={{ color: "blue" }}>
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
                    <img className="imgs" alt="Ahmed Ehab Elkharadly" draggable="true" 
                    src="https://pbs.twimg.com/profile_images/1467935505052545031/RDwnhybQ_normal.jpg"/>
                    </div>
                    <div>
                        <div className='name'>Ahmed Ehab Elkharadly</div>
                        <div className='username'>@Elkharadliation</div>
                    </div>
                    <div>
                    <h2>...</h2>
                    </div>
                    </button>
                </footer>
            </div>
        </div>
    );
}
 
export default LeftPane;