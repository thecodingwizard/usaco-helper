import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { SnippetList } from "../components";
import * as actions from "../store/actions";

const styles = theme => ({
  container: {
    padding: "2em",
    width: "100%",
    maxWidth: "40em",
    margin: "auto",
    boxSizing: "border-box",
  },
  fab: {
    position: "fixed",
    margin: theme.spacing.unit*4,
    bottom: 0,
    right: 0,
  },
});

class HomePage extends Component {
  componentDidMount() {
    this.props.startSync();
  }

  componentWillUnmount() {
    this.props.stopSync();
  }

  render() {
    const { classes, snippets, loading } = this.props;

    return (
      <div className={classes.container}>
        {loading && <CircularProgress />}
        {!loading && <SnippetList snippets={snippets} />}

        <Button variant="fab" color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.snippets.loading,
  snippets: state.snippets.snippets
});

const mapDispatchToProps = (dispatch) => ({
  startSync: () => dispatch(actions.startSnippetsListSync()),
  stopSync: () => dispatch(actions.stopSnippetsListSync())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HomePage));