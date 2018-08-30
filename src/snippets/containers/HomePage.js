import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { SnippetList } from "../components";
import * as actions from "../store/actions";
import baseStyles from "../../styles";

const styles = theme => ({
  container: baseStyles.smallContainer,
  fab: baseStyles.fab(theme)
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

        <Button
          variant="fab"
          color="primary"
          aria-label="New Snippet"
          className={classes.fab}
          component={Link}
          to="/snippets/new">
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