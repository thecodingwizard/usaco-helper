import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./components";

class Snippets extends Component {
  render() {
    const { match } = this.props;
    
    return (
      <Switch>
        <Route path={`${match.url}/`} exact component={HomePage} />
      </Switch>
    );
  }
}

export default Snippets;