import React from "react";
import './PeopleToFollow.css'

const PeopleToFollow = ({name, username}) => {
    return ( 
        <div className='PeopleToFollow'>
            <div className='photo PTF_img'>
                <img  alt="Ahmed Ehab Elkharadly" draggable="true" className="avatar imgs"
                src="https://pbs.twimg.com/profile_images/1467935505052545031/RDwnhybQ_normal.jpg"/>
            </div> 
                <div className='post_text PTF_text'>
                <div className='displayname'>{name}</div>
                <div className='username'>{username}</div>
            </div>       
            <button className='tweetCart_btn PTF_btn'>follow</button>
        </div>
     );
}
 
export default PeopleToFollow;