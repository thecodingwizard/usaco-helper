import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as containers from "./containers";

class CalculatorPage extends Component {
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