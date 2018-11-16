import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./views/searching/Main";
import Details from "./views/details/Details";
import "./App.css";

import { Header } from "./Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            {/* <Route path="/details" component={Details} /> */}
            <Route path="/details/people/:id" component={Details} />
            <Route path="/details/movies/:id" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
