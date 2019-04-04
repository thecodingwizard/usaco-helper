import React, { Component } from 'react';
import Link from "next/link";
import classnames from "classnames";

const NavLink = props => (
  <Link href={props.href}>
    <a className={classnames("inline-block px-6 text-grey-1 no-underline hover:bg-grey-10", props.className)}
       style={{ lineHeight: "60px", transition: "background-color 0.2s" }}>
      {props.children}
    </a>
  </Link>
);

class Navbar extends Component {
  render() {
    return (
      <div className="bg-white shadow">
        <div className="container mx-auto flex">
          <div className="flex-none flex">
            <NavLink href="/" className="text-xl">USACO Helper</NavLink>
          </div>
          <div className="flex-grow flex justify-end items-center">
            <NavLink href="/snippets">Snippets</NavLink>
            <NavLink href="/calculator">Calculator</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
