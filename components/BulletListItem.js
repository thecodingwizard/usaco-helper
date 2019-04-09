import React, { Component } from 'react';
import styled from "styled-components";

class BulletListItem extends Component {
  render() {
    return (
      <li className="py-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 mr-4">
          <circle cx="12" cy="12" r="12" className="text-yellow-9 fill-current" />
          <path className="text-yellow-1 fill-current"
                d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z" />
        </svg>
        <div>{this.props.children}</div>
      </li>
    );
  }
}

export default BulletListItem;
