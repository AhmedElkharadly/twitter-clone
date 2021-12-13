import React from "react";
import './searchBar.css'
import { searchIc } from "../leftpane/svg";
const SearchBar = (props) => {
    return ( 
        <form className='search_form' action="/" method="get">
        <label className='searchIc' htmlFor="header-search">
            {searchIc}
        </label>
        <input
            className='search_input'
            type="text"
            id="header-search"
            placeholder="Search Twitter"
            name="s" 
        />
        <button className="visually-hidden" type="submit">Search</button>
    </form>
     );
}
 
export default SearchBar;