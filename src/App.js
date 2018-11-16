import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./views/searching/Main";
import Details from "./views/details/Details";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/details" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
