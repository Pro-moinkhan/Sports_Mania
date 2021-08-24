import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Teams from './Components/Teams/Teams';
import TeamsDetail from './Components/TeamsDetail/TeamsDetail';
const ErrorStyle = {
  display: "flex",
  justifyContent: "center",
  color: "gray"
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "/Home">
          <Home/>
        </Route>
        <Route path = "/Teams">
          <Teams/>
        </Route>
        <Route path = '/TeamsDetail/:TeamId'>
        <TeamsDetail/>
        </Route>
        <Route path ="*"> 
          <>
          <h1 style = {ErrorStyle}> -_- (Something Went Wrong!) </h1>
          <h1 style = {ErrorStyle}> Route Not Found  ___ :(</h1>
          </>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
