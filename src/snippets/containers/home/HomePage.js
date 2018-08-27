import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { SnippetList } from "../../components";

const styles = {
  container: {
    padding: "2em",
    width: "100%",
    maxWidth: "40em",
    margin: "auto",
  }
};

class HomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <SnippetList />
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);