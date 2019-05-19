import React, { Component } from 'react';
import classnames from "classnames";

class ActionCard extends Component {
  render() {
    return (
      <div className={classnames("shadow bg-white p-6", this.props.className)}>
        <div className="text-grey-1 text-2xl pb-2">View Snippets</div>
        <div className="text-grey-3">Create, edit, and share code snippets.</div>
      </div>
    );
  }
}

export default ActionCard;
