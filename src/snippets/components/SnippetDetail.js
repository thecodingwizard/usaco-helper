import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AceEditor from "react-ace";
import "brace/mode/c_cpp";
import "brace/theme/textmate";

const styles = theme => ({
  shortDescription: {
    fontSize: 18,
    fontStyle: "italic"
  },
  description: {
    marginTop: theme.spacing.unit*4,
  },
  descriptionHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

const SnippetDetail = (props) => {
  const { snippet, classes } = props;

  if (!snippet) return <div>Error: Snippet is undefined.</div>;

  return (
    <div>
      <Typography variant="display1" gutterBottom>
        {snippet.title}
      </Typography>
      <Typography gutterBottom className={classes.shortDescription}>{snippet.shortDescription}</Typography>
      <ExpansionPanel className={classes.description}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.descriptionHeading}>Description</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{snippet.description}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.descriptionHeading}>Code Snippet</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <AceEditor
            mode="c_cpp"
            theme="textmate"
            name="snippetCode"
            readOnly
            value={snippet.snippet}
            editorProps={{$blockScrolling: true}}
            width="100%"
            fontSize={14} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default withStyles(styles)(SnippetDetail);