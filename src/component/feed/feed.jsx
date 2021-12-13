import React from "react";
import './feed.css'
import { topTweetIc } from "../leftpane/svg";
import TweetCart from "./tweetCart";
import Posts from "./Posts";

const Feed = () => {
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
            avatar='/image/twiter-logo.png'/>
            <Posts 
            name='Menna Elsayed'
            username='@mennatullah' 
            timeset='.2h' 
            text='Got Encaged to Ahmed Ehab Elkharadly <3' 
            pictures='/image/menna.JPG' 
            avatar=''
            />
            <Posts 
            name='Mohamed Ehab Elkharadly'
            username='@melkhardly' 
            timeset='.35min' 
            text='' 
            pictures='/image/login.png' 
            avatar=''
            />
            <Posts 
            name='Ahmed Ehab Elkharadly'
            username='@elkharadliation' 
            timeset='.2h' 
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non impedit quasi suscipit nesciunt sed cumque id. Distinctio sit nemo expedita harum debitis tempore quidem eos nobis nisi, minus enim et.' 
            pictures='' 
            avatar=''
            />
            <Posts 
            name='Mhamoud Ehab Elkharadly'
            username='@Hooda' 
            timeset='.1d' 
            text='هلا والله أهل الخير' 
            pictures='' 
            avatar=''
            />
            <Posts 
            name='Ehab Elkharadly'
            username='@Ehab' 
            timeset='.3d' 
            text='' 
            pictures='' 
            avatar=''
            />
        </div>
     );
}
 
export default Feed;
