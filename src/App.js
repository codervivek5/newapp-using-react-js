import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Switch>
            <Route path="/" exact>
              <News pageSize={6} country="in" category="general" key="general" />
            </Route>
            <Route path="/business">
              <News pageSize={6} country="in" category="business" key="business" />
            </Route>
            <Route path="/entertainment">
              <News pageSize={6} country="in" category="entertainment" key="entertainment" />
            </Route>
            <Route path="/general">
              <News pageSize={6} country="in" category="general" key="general" />
            </Route>
            <Route path="/health">
              <News pageSize={6} country="in" category="health" key="health" />
            </Route>
            <Route path="/science">
              <News pageSize={6} country="in" category="science" key="science" />
            </Route>
            <Route path="/sports">
              <News pageSize={6} country="in" category="sports" key="sports" />
            </Route>
            <Route path="/technology">
              <News pageSize={6} country="in" category="technology" key="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
