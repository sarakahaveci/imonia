import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewGame from "./pages/NewGame";
import Games from "./pages/Games";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import LastPage from "./pages/LastPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Games}></Route>
          <Route path="/games" component={Games}></Route>
          <Route path="/newgame" component={NewGame}></Route>
          <Route path="/pagetwo" component={PageTwo}></Route>
          <Route path="/pagethree" component={PageThree}></Route>
          <Route path="/lastpage" component={LastPage}></Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
