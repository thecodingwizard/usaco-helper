import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SnippetForm from "../components/SnippetForm";
import baseStyles from "../../styles";

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
    console.log("Form submitted", data);
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography variant="headline" gutterBottom className={classes.heading} align="center">
          Create New Snippet
        </Typography>
        <SnippetForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default withStyles(styles)(NewSnippetPage);