import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import baseStyles from "../../styles";

const styles = theme => ({
  container: baseStyles.smallContainer,
  titleDivider: {
    marginBottom: theme.spacing.unit*4
  },
  logText: {
    fontSize: 16,
    display: "inline-block"
  },
  logInput: {
    marginLeft: theme.spacing.unit*1.5,
    marginRight: theme.spacing.unit*1.5
  },
  logTitle: {
    marginBottom: theme.spacing.unit
  }
});

class CalculatorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      log: 100000,
      logAns: Math.log2(100000)
    };

    this.handleLogChange = this.handleLogChange.bind(this);
  }

  handleLogChange(event) {
    let val = event.target.value;
    this.setState({
      log: val,
      logAns: Math.log2(val)
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography variant="display1" gutterBottom>
          Calculator
        </Typography>
        <Divider className={classes.titleDivider} />
        <Typography variant="title" className={classes.logTitle}>
          Log base 2
        </Typography>
        <div>
          <Typography variant="body1" className={classes.logText}>
            Log base 2 of
          </Typography>
          <TextField
            value={this.state.log}
            onChange={this.handleLogChange}
            className={classes.logInput} />
          <Typography variant="body1" className={classes.logText}>
            is {this.state.logAns.toFixed(2)}
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CalculatorPage);