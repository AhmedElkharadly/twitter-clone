import React from "react";
// import { useState, useEffect } from "react";
import './feed.css'
import { topTweetIc } from "../leftpane/svg";
import TweetCart from "./tweetCart";
import Posts from "./Posts";
// import db from "../../firebase";

const Feed = () => {
    // const [post, setPost] = useState()

    // useEffect(() => {
    // db.collection('posts').onSnapshot(snapshot => (
    //     setPost(snapshot.docs.map(doc => doc.data()))
    // ));
    // }, [])

    return ( 
        <div className="feed">
            <div className='header'>
               <h2 > Home </h2>
               {topTweetIc}
            </div>
            <TweetCart />
            <Posts 
            name='Ahmed Ehab Elkharadly'
            username='@elkharadliation' 
            timeset='.21h' 
            text='Greate achievements somtimes requires great risks. ' 
            pictures='/image/me.png' 
            avatar="https://pbs.twimg.com/profile_images/1467935505052545031/RDwnhybQ_normal.jpg"
            />
            <Posts 
            name='Menna Elsayed'
            username='@mennatullah' 
            timeset='.2h' 
            text='Got Encaged to Ahmed Ehab Elkharadly <3' 
            pictures='/image/menna.JPG' 
            avatar="https://pbs.twimg.com/profile_images/955364167703318528/pFS-Ttm__normal.png"
            />
            <Posts 
            name='Mohamed Ehab Elkharadly'
            username='@melkhardly' 
            timeset='.35min' 
            text='Hello, Its working' 
            pictures='/image/login.png' 
            avatar="https://pbs.twimg.com/profile_images/1397469365927354369/27u3la1R_normal.jpg"
            />
            <Posts 
            name='Ahmed Ehab Elkharadly'
            username='@elkharadliation' 
            timeset='.2h' 
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non impedit quasi suscipit nesciunt sed cumque id. Distinctio sit nemo expedita harum debitis tempore quidem eos nobis nisi, minus enim et.' 
            pictures='' 
            avatar="https://pbs.twimg.com/profile_images/1467935505052545031/RDwnhybQ_normal.jpg"
            />
            <Posts 
            name='Mhamoud Ehab Elkharadly'
            username='@Hooda' 
            timeset='.1d' 
            text='هلا والله أهل الخير' 
            pictures='' 
            avatar="https://pbs.twimg.com/profile_images/1365836139916001282/sustptSk_normal.jpg"
            />
        </div>
     );
}
 
export default Feed;
