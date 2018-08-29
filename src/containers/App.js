import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Loadable from "../components/Loadable";

const LoadableSnippets = Loadable({
  loader: () => import("../snippets")
});

const styles = {
  root: {
    flexGrow: 1,
  },
  brand: {
    flexGrow: 1,
    textDecoration: "none",
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.brand}
              component={Link}
              to="/">
              USACO Snippets
            </Typography>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/" component={() => <Redirect to="/snippets" />} />
          <Route path="/snippets" component={LoadableSnippets} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);