import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu"
import ListIcon from "@material-ui/icons/List";
import GradeIcon from "@material-ui/icons/Grade";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Loadable from "../components/Loadable";

const LoadableSnippets = Loadable({
  loader: () => import("../snippets")
});

const LoadableCalculator = Loadable({
  loader: () => import("../calculator")
});

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  brand: {
    flexGrow: 1,
    textDecoration: "none",
  },
  menuButton: {
    marginLeft: -6,
    marginRight: 14,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative",
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    width: "100%",
  },
  appContainer: {
    display: "flex",
    flexGrow: 1,
    width: "100%",
  },
  permanentDrawer: {
    height: "100%",
  },
});

type State = {
  mobileOpen: boolean
};

class App extends Component<WithStyles<typeof styles>, State> {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;

    const drawer = (
      <List component="nav">
        <ListItem button component={props => <Link {...props} to="/snippets" />}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Snippets" />
        </ListItem>
        <ListItem button component={props => <Link {...props} to="/calculator" />}>
          <ListItemIcon>
            <GradeIcon />
          </ListItemIcon>
          <ListItemText primary="Calculator" />
        </ListItem>
      </List>
    );

    return (
      <div className={classes.root}>
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open Drawer"
              onClick={this.handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.brand}
              component={props => <Link {...props} to="/" />}>
              USACO Helper
            </Typography>
          </Toolbar>
        </AppBar>

        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="right"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        <div className={classes.appContainer}>
          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
              className={classes.permanentDrawer}
            >
              {drawer}
            </Drawer>
          </Hidden>

          <main className={classes.content}>
            <Switch>
              <Route path="/calculator" component={LoadableCalculator} />
              <Route path="/snippets" component={LoadableSnippets} />
              <Route path="/" exact render={() => <Redirect to="/snippets" />} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
