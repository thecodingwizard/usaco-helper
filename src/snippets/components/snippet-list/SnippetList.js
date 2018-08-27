import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

const styles = {

};

const SnippetList = (props) => {
  return (
    <div>
      <p>Snippet list!</p>
      {props.snippets.map(snip => (
        <div key={snip.id}>
          <p>ID: {snip.id}</p>
          <p>Title: {snip.title}</p>
          <p>Author: {snip.author}</p>
          <p>Description: {snip.description}</p>
        </div>
      ))}
    </div>
  );
}

SnippetList.propTypes = {
  snippets: PropTypes.array.isRequired
};

export default withStyles(styles)(SnippetList);