import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  margin: {
    marginBottom: theme.spacing.unit * 2.5
  },
  submitContainer: {
    textAlign: "center"
  },
  buttons: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2
  }
});

const renderTextField = ({
  input,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    error={touched && error}
    {...input}
    {...custom} />
);

const SnippetForm = (props) => {
  const { handleSubmit, pristine, submitting, classes } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.margin}>
        <Field
          name="title"
          component={renderTextField}
          label="Snippet Title"
          fullWidth />
      </div>
      <div className={classes.margin}>
        <Field
          name="shortDescription"
          component={renderTextField}
          label="Short Description"
          fullWidth />
      </div>
      <div className={classes.margin}>
        <Field
          name="description"
          component={renderTextField}
          label="Description"
          fullWidth
          multiline />
      </div>
      <div className={classes.margin}>
        <Field
          name="snippet"
          component={renderTextField}
          label="Snippet Code"
          fullWidth
          multiline
          rowsMax="15" />
      </div>
      <div className={classes.submitContainer}>
        <Button
          variant="outlined"
          component={Link}
          to="/snippets"
          className={classes.buttons}>
          Cancel
        </Button>
        <Button 
          variant="contained"
          color="primary"
          type="submit" 
          disabled={pristine || submitting}
          className={classes.buttons}>
          Submit
        </Button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: "snippetForm"
})(withStyles(styles)(SnippetForm));