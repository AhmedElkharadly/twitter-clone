import React from "react";
import './WidgetNews.css'

const WidgetNews = ({title, news, ...otherProps} ) => {
    return ( 
        <div className='WidgetNews'>
            <div className='WN_header'>
                <h6>{title}</h6>
                <h4 className="dots">...</h4>
            </div>
            <div className='WN_news'>
                <h2>{news}</h2>
            </div>
        </div>
     );
}
 
export default WidgetNews;