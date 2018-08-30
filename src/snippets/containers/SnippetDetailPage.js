import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import * as actions from "../store/actions";
import { SnippetDetail, SnippetForm } from "../components";
import baseStyles from "../../styles";

const styles = theme => ({
  container: baseStyles.container,
  fab: baseStyles.fab(theme)
});

class SnippetDetailPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.startSelectedSnippetSync(this.props.match.params.id);
  }

  static componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.stopSelectedSnippetSync();
      this.props.startSelectedSnippetSync(this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.stopSelectedSnippetSync();
  }

  handleSubmit(snippet) {
    const { id, ...data } = snippet;
    this.props.updateSnippet(id, data);
  }

  render() {
    const { loading, formLoading, classes, isEditing, snippet } = this.props;

    return (
      <div className={classes.container}>
        {loading && <CircularProgress />}
        
        {
          !loading &&
          !isEditing &&
          <SnippetDetail snippet={snippet} />
        }

        {
          !loading &&
          isEditing &&
          snippet &&
          <SnippetForm
            initialValues={snippet}
            cancelDestination={`/snippets/${snippet.id}`}
            showLoadingIndicator={formLoading}
            onSubmit={this.handleSubmit} />
        }

        {
          !isEditing &&
          snippet &&
          <Button
            variant="fab"
            color="primary"
            aria-label="New Snippet"
            className={classes.fab}
            component={Link}
            to={`/snippets/${snippet.id}/edit`}>
            <EditIcon />
          </Button>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.snippets.loading,
  formLoading: state.snippets.formLoading,
  snippet: state.snippets.selectedSnippet
});

const mapDispatchToProps = (dispatch) => ({
  startSelectedSnippetSync: snippetId => dispatch(actions.startSelectedSnippetSync(snippetId)),
  stopSelectedSnippetSync: () => dispatch(actions.stopSelectedSnippetSync()),
  updateSnippet: (snippetId, snippetData) => dispatch(actions.updateSnippet(snippetId, snippetData))
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SnippetDetailPage));