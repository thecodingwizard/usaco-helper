import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = {
  
};

const SnippetDetail = (props) => {
  const { snippet } = props;

  if (!snippet) return <div>Error: Snippet is undefined.</div>;

  return (
    <div>
      <Typography variant="display1" gutterBottom>
        {snippet.title}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(SnippetDetail);