import React from "react";
import { Routes , Route } from "react-router-dom";
import './App.css';
import LeftPane from "./component/leftpane/leftpane";
import Feed from "./component/feed/feed";
import RightPane from "./component/rightpane/rightpane";
import Login from './component/login/login';
import LoginR from "./component/login/loginR";


function App() {
  return (
    <div className='app'>
        <LeftPane/>
        <div className="route">
        <Routes>
                <Route exact path="/home" element={<Feed/>}/>
                <Route exact path="/explore" element={<h1>Exploration</h1>}/>
                <Route exact path="/notifications"element={<h1>Notification</h1>}/>
                <Route exact path="/messages"element={<h1>Messages</h1>}/>
                <Route exact path="/bookmarks"element={<h1>BoojMarks</h1>}/>
                <Route exact path="/lists"element={<h1>Lists</h1>}/>
                <Route exact path="/profile"element={<h1>Profile</h1>}/>
            </Routes> 
        </div>  
        <RightPane/>
    </div>
  );
}

export default App;