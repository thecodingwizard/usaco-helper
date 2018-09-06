import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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
  },
  logTableTitle: {
    marginTop: theme.spacing.unit*3,
    marginBottom: theme.spacing.unit*1.5,
    fontSize: 18
  },
  logTableContainer: {
    width: "100%",
    overflowX: "auto",
  },
});

class CalculatorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      log: 100000,
      logAns: Math.log2(100000),
      logTableRows: [
        { name: "1 Thousand", value: 1000 },
        { name: "10 Thousand", value: 10000 },
        { name: "50 Thousand", value: 50000 },
        { name: "100 Thousand", value: 100000 },
        { name: "1 Million", value: 1000000 },
        { name: "1 Billion", value: 1000000000 }
      ]
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
    const { logTableRows } = this.state;
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
        <Typography variant="subheading" className={classes.logTableTitle}>
          Common Log Values
        </Typography>
        <Paper className={classes.logTableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Argument</TableCell>
                <TableCell numeric>Argument (Numeric)</TableCell>
                <TableCell numeric>Power</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {logTableRows.map(row => {
                return (
                  <TableRow key={row.value}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell numeric>{row.value}</TableCell>
                    <TableCell numeric>{Math.log2(row.value).toFixed(2)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(CalculatorPage);