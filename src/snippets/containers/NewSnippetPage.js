import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SnippetForm from "../components/SnippetForm";
import baseStyles from "../../styles";
import * as actions from "../store/actions";

const styles = theme => ({
  container: baseStyles.smallContainer,
  heading: {
    fontSize: theme.typography.display1.fontSize
  }
});

class NewSnippetPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.props.createNewSnippet(data);
  }
  
  render() {
    const { classes, loading } = this.props;
    return (
      <div className={classes.container}>
        <Typography variant="headline" gutterBottom className={classes.heading} align="center">
          Create New Snippet
        </Typography>
        <SnippetForm onSubmit={this.handleSubmit} submitButtonDisabled={loading} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.snippets.loading
});

const mapDispatchToProps = dispatch => ({
  createNewSnippet: snippet => dispatch(actions.createNewSnippet(snippet))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewSnippetPage));