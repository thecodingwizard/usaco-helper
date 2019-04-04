import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.nav`
  background-color: white;
`;

class Navbar extends Component {
  render() {
    return (
      <Container>
        My Navbar
      </Container>
    );
  }
}

export default Navbar;
