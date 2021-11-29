import { Routes , Route, Link } from "react-router-dom";
import './App.css';
import Login from './component/login/login';
import LoginR from "./component/login/loginR";
import LeftPane from "./component/leftpane/leftpane";
import RightPane from "./component/rightpane/rightpane";

function App() {
  return (
    <div className='app'>
        <LeftPane/>
      <div>
        <Routes >
          <Route exact path="/home">Home Page</Route>
          <Route exact path="/explore">explore Page</Route>
          <Route exact path="/notifications">notification Page</Route>
          <Route exact path="/messages">message Page</Route>
          <Route exact path="/bookmarks">bookmarks Page</Route>
          <Route exact path="/lists">list Page</Route>
          <Route exact path="/profile">Profile Page</Route>
        </Routes > 
      </div>
        <RightPane/>
    </div>
  );
}

export default App;
