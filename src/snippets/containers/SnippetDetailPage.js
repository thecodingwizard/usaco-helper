import React, { Component } from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as actions from "../store/actions";
import { SnippetDetail } from "../components";

class SnippetDetailPage extends Component {
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

  render() {
    const { snippet, loading } = this.props;

    return (
      <div>
        {loading && <CircularProgress />}
        {!loading && <SnippetDetail snippet={snippet} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.snippets.loading,
  snippet: state.snippets.selectedSnippet
});

const mapDispatchToProps = (dispatch) => ({
  startSelectedSnippetSync: snippetId => dispatch(actions.startSelectedSnippetSync(snippetId)),
  stopSelectedSnippetSync: () => dispatch(actions.stopSelectedSnippetSync())
});

export default connect(mapStateToProps, mapDispatchToProps)(SnippetDetailPage);