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
            <Route path="/" element={<News pageSize={6} country="in" category="general" key="general" />} />
            <Route path="/business" element={<News pageSize={6} country="in" category="business" key="business" />} />
            <Route path="/entertainment" element={<News pageSize={6} country="in" category="entertainment" key="entertainment" />} />
            <Route path="/general" element={<News pageSize={6} country="in" category="general" key="general" />} />
            <Route path="/health" element={<News pageSize={6} country="in" category="health" key="health" />} />
            <Route path="/science" element={<News pageSize={6} country="in" category="science" key="science" />} />
            <Route path="/sports" element={<News pageSize={6} country="in" category="sports" key="sports" />} />
            <Route path="/technology" element={<News pageSize={6} country="in" category="technology" key="technology" />} />
          </Switch>
        </Router>
      </div>
    );
  }
}
