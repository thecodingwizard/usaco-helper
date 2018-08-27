import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  container: {
    padding: "2em",
    width: "100%",
    maxWidth: "40em",
    backgroundColor: "blue",
    margin: "auto",
  }
};

class HomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        Hi
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);