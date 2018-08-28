import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as containers from "./containers";

class Snippets extends Component {
  render() {
    const { match } = this.props;
    
    return (
      <Switch>
        <Route path={`${match.url}/`} exact component={containers.HomePage} />
        <Route path={`${match.url}/:id`} exact component={containers.SnippetDetailPage} />
      </Switch>
    );
  }
}

export default Snippets;