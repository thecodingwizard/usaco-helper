import React, { Component } from "react";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import LogCalculator from "../components/LogCalculator";
import baseStyles from "../../styles";

const styles = (theme: Theme) => createStyles({
  container: baseStyles.smallContainer,
  titleDivider: {
    marginBottom: theme.spacing.unit*4,
  },
});

class CalculatorPage extends Component<WithStyles<typeof styles>> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography variant="h4" gutterBottom>
          Calculator
        </Typography>
        <Divider className={classes.titleDivider} />
        <LogCalculator />
      </div>
    );
  }
}

export default withStyles(styles)(CalculatorPage);
