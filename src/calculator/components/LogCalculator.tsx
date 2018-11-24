import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

const styles = (theme: Theme) => createStyles({
  logText: {
    fontSize: 16,
    display: "inline-block"
  },
  logInput: {
    marginLeft: theme.spacing.unit * 1.5,
    marginRight: theme.spacing.unit * 1.5
  },
  logTitle: {
    marginBottom: theme.spacing.unit
  },
  logTableTitle: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 1.5,
    fontSize: 18
  },
  logTableContainer: {
    width: "100%",
    overflowX: "auto",
    boxSizing: "border-box"
  },
});

type State = {
  log: number,
  logAns: number,
  logTableRows: { name: string, value: number }[]
};

class LogCalculator extends Component<WithStyles<typeof styles>, State> {
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
      <React.Fragment>
        <Typography variant="h6" className={classes.logTitle}>
          Log base 2
        </Typography>
        <div>
          <Typography variant="body2" className={classes.logText}>
            Log base 2 of
          </Typography>
          <TextField
            value={this.state.log}
            onChange={this.handleLogChange}
            className={classes.logInput}/>
          <Typography variant="body2" className={classes.logText}>
            is {this.state.logAns.toFixed(2)}
          </Typography>
        </div>
        <Typography variant="subtitle1" className={classes.logTableTitle}>
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
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LogCalculator);
