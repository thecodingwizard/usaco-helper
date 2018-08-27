import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
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
    const { classes, snippets, loading } = this.props;

    return (
      <div className={classes.container}>
        {loading && <CircularProgress />}
        {!loading && <SnippetList snippets={snippets} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.snippets.loading,
  snippets: state.snippets.snippets
});

export default connect(mapStateToProps)(withStyles(styles)(HomePage));