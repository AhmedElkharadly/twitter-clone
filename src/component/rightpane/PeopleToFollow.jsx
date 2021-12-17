import React from "react";
import './PeopleToFollow.css'

const PeopleToFollow = ({name, username, avatar}) => {
    return ( 
        <div className='PeopleToFollow'>
            <div className='photo PTF_img'>
                <img  
                alt=""
                className="avatar imgs"
                src={avatar}/>
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