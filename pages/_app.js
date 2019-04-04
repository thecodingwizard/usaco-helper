import React from "react";
import App, { Container } from "next/app";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import "../styles/index.css";

const PageWrapper = styled.div`
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  background-color: hsl(210, 36%, 96%);
  height: 100%;
`;

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <PageWrapper>
        <Navbar />
        {children}
      </PageWrapper>
    );
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component { ...pageProps} />
        </Layout>
      </Container>
    )
  }
}
