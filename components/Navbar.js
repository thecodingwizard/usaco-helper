import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.nav`
  background-color: white;
  height: 70px;
  box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.1);
`;

class Navbar extends Component {
  render() {
    return (
      <Container>
        <div className="container mx-auto">

        </div>
      </Container>
    );
  }
}

export default Navbar;
