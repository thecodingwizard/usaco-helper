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
  constructor(props) {
    super(props);

    // temporary until redux gets implemented
    this.state = {
      snippets: [
        {
          id: "abc",
          title: "Fenwick Tree",
          description: "Implementation of an OOP-style fenwick tree"
        },
        {
          id: "bcd",
          title: "Binary Tree",
          description: "Implementation of a generic binary tree"
        },
        {
          id: "cde",
          title: "Segment Tree",
          description: "Implementation of an OOP-style segment tree"
        },
      ]
    };
  }

  render() {
    const { classes } = this.props;
    const { snippets } = this.state;

    return (
      <div className={classes.container}>
        <SnippetList snippets={snippets} />
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);