import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as containers from "./containers";
import { RouteComponentProps } from "react-router";

class CalculatorPage extends Component<RouteComponentProps> {
  render() {
    const { match } = this.props;

    return (
      <Switch>
        <Route path={`${match.url}/`} exact component={containers.CalculatorPage} />
      </Switch>
    );
  }
}

export default CalculatorPage;
