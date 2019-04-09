import React from "react";
import styled from "styled-components";
import BulletListItem from "../components/BulletListItem";

const Hero = styled.div`

`;

const Features = styled.div`
  margin-bottom: -140px;
`;

const FeaturesTitle = styled.h2`
  &:after {
    content: ""; 
    display: block;
    width: 75px;
    padding-top: 12px;
    border-bottom: 3px solid #0A558C;
  }
`;

const FeaturesList = styled.ul`
  columns: 2;
`;

function Home() {
  return (
    <div>
      <Hero className="bg-blue-2">
        <div className="container mx-auto px-6">
          <h1 className="text-blue-10 text-5xl pt-32 pb-6 font-normal">USACO Helper</h1>
          <p className="text-blue-10 text-2xl pb-20">USACO Helper is a platform that aims to assist USACO contestants and competitive programmers.</p>

          <Features className="bg-white shadow-md p-10 text-grey-1">
            <FeaturesTitle className="text-3xl font-normal mb-5">Features</FeaturesTitle>

            <FeaturesList className="list-reset">
              <BulletListItem>Create, edit, and share code snippets</BulletListItem>
              <BulletListItem>Calculate log base 2 with ease</BulletListItem>
              <BulletListItem>Fully open-source</BulletListItem>
              <BulletListItem>Calculate  USACO contest score (Coming Soon!)</BulletListItem>
              <BulletListItem>View ASCII tables (Coming Soon!)</BulletListItem>
              <BulletListItem>Output Comparison (Coming Soon!)</BulletListItem>
            </FeaturesList>
          </Features>
          &nbsp;
        </div>
      </Hero>
    </div>
  );
}

export default Home;
