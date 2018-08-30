import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AceEditor from "react-ace";
import "brace/mode/c_cpp";
import "brace/theme/textmate";

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
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  buttonWrapper: {
    display: "inline-block",
    position: "relative",
  },
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

const renderCodeEditor = ({
  input
}) => (
  <AceEditor
    mode="c_cpp"
    name="snippetCode"
    theme="textmate"
    editorProps={{$blockScrolling: true}}
    width="100%"
    fontSize={14}
    onChange={(val, ev) => input.onChange(val)}
    value={input.value}
    height="300px" />
)

const SnippetForm = (props) => {
  const { handleSubmit, pristine, submitting, classes, showLoadingIndicator, cancelDestination } = props;
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
        <Typography variant="subheading" gutterBottom>
          Code Snippet:
        </Typography>
        <Field
          name="snippet"
          component={renderCodeEditor} />
      </div>
      <div className={classes.submitContainer}>
        <Button
          variant="outlined"
          component={Link}
          to={cancelDestination || "/snippets"}
          className={classes.buttons}>
          Cancel
        </Button>
        <div className={classes.buttonWrapper}>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttons}
            disabled={pristine || submitting || showLoadingIndicator}
            type="submit">
            Submit
          </Button>
          {showLoadingIndicator && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      </div>
    </form>
  );
}

export default reduxForm({
  form: "snippetForm"
})(withStyles(styles)(SnippetForm));