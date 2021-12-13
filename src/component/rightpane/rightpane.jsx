import React from "react";
import { Link } from "react-router-dom";
import './rightpane.css'
import SearchBar from "./searchBar";
import WidgetNews from "./WidgetNews";
import PeopleToFollow from './PeopleToFollow'
const RightPane = (props) => {
    return (
        <div className='rp_header'>
          <div className='rp_content'>
            <SearchBar/>
            <div className='WH'>
              <h2 className='Wheader'>What`s Happinning</h2>
              <div>
              <WidgetNews title='News, Trending' news='القدس عاصمة فلسطين'/>
              <WidgetNews title='Trending in Egypt' news='العاصمة الإدارية الجديده'/>
              <WidgetNews title='News' news='Mo Salah'/>
              </div>
            </div>
            <div className='WTF'>
              <h2 className='Wheader'>Who to follow</h2>
              <PeopleToFollow name="Ahmed Elkharadly" username="@elkharadliation"/>
              <PeopleToFollow name="Menna Refaat" username="@menna.elsaied" />
              <PeopleToFollow name="Mohamed Ehab" username="@mohamed"/>
            </div>
            <div className="rp_footer">
              <nav className='rp_nav'>
                <Link className='nav_lnk' to='/service'>terms of service</Link>
                <Link className='nav_lnk' to='/privacy'>privacy policy</Link>
                <Link className='nav_lnk' to='/cookie'>cookie policy</Link>
                <Link className='nav_lnk' to='/ads'>ads info</Link>
                <div className='nav_lnk'>&copy; 2021 Twitter, Inc.</div>
              </nav>
            </div>
          </div>
        </div>
      );
}
 
export default RightPane;