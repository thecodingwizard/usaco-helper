import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Snippets from "../snippets";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/snippets" component={Snippets} />
      </Switch>
    );
  }
}

export default App;