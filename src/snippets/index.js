import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as containers from "./containers";

class Snippets extends Component {
  render() {
    const { match } = this.props;
    
    return (
      <Switch>
        <Route path={`${match.url}/`} exact component={containers.HomePage} />
        <Route path={`${match.url}/new`} component={containers.NewSnippetPage} />
        <Route
          path={`${match.url}/:id`}
          exact 
          render={props => 
            <containers.SnippetDetailPage isEditing={false} {...props} />
          } />
        <Route
          path={`${match.url}/:id/edit`} 
          render={props => 
            <containers.SnippetDetailPage isEditing={true} {...props} />
          } />
      </Switch>
    );
  }
}

export default Snippets;