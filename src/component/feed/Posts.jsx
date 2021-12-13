import React from "react";
import './Posts.css'
import { likeIc, commentIc, shareIc, retweetIc } from '../leftpane/svg';
const Posts = ({name, username, verify, timeset, text, pictures, avatar}) => {
    return ( 
        <div className='post'>
            <div className='photo avatar'>
            <img alt="Ahmed Ehab Elkharadly" draggable="true" className='avatar imgs'
                src="https://pbs.twimg.com/profile_images/1467935505052545031/RDwnhybQ_normal.jpg"/>
            </div> 
            <div className='post_body'>
                <div className='post_header'>
                    <div className='post_text'>
                        <span className='displayname'>{name}</span>
                        <span className='username'>{username}</span>
                        <span className='username'>{timeset}</span>
                    </div>
                    <div className="post_headerDescription">
                        <p>{text}</p>
                        <br />
                    </div>
                </div>
                <div className='post_img'>
                    <img className='imgg' src={pictures} />                  
                </div>
                <div className='post_footer'>
                {commentIc} {retweetIc} {likeIc} {shareIc}
                </div>
            </div>      
        </div>
     );
}
 
export default Posts;