import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewGame from "./pages/NewGame";
import Games from "./pages/Games";
import PageTwo from "./pages/PageTwo";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/games" component={Games}></Route>
          <Route path="/newgame" component={NewGame}></Route>
        </Switch>
        <Switch>
        <Route path="pagetwo" component={PageTwo}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
