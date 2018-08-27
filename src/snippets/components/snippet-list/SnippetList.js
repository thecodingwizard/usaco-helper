import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {

};

const SnippetList = (props) => {
  return (
    <div>
      <List subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}>
        {props.snippets.map(snip => (
          <ListItem key={snip.id} button component={Link} to={`/snippets/${snip.id}`}>
            <ListItemText
              primary={snip.title}
              secondary={snip.description} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

SnippetList.propTypes = {
  snippets: PropTypes.array.isRequired
};

export default withStyles(styles)(SnippetList);