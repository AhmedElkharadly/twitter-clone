import react from 'react';
import { addimgIc, addemogIc, addpollIc, addgifIc ,addsculIc} from '../leftpane/svg';
import './tweetCart.css'

const TweetCart = () => {
    return ( 
        <form className='tweetCart'>
            <div className='photo tweetimg'>
                <img alt="Ahmed Ehab Elkharadly" draggable="true" className='avatar imgs'
                src="https://pbs.twimg.com/profile_images/1467935505052545031/RDwnhybQ_normal.jpg"/>
            </div>
            <div className='tweetCart_header'>
                <textarea autoFocus maxLength="650" className='tweetCart_input' type='textarea' placeholder='What`s happening?'/>
                <div className='tweetCart_svb'>
                    <div>
                    {addimgIc}{addgifIc}{addpollIc}{addemogIc}{addsculIc}
                    </div>
                    <button  className='tweetCart_btn'> Tweet </button>
                </div>
            </div>
        </form>
     );
}
 

export default TweetCart;