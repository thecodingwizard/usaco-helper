import React from "react";
import styled from "styled-components";
import BulletListItem from "../components/BulletListItem";
import ActionCard from "../components/ActionCard";

const Features = styled.div`
  margin-bottom: -175px;
`;
const FeaturesSpace = styled.div`
  height: 175px;
`;

const FeaturesTitle = styled.h2`
  &:after {
    content: ""; 
    display: block;
    width: 100px;
    padding-top: 12px;
    border-bottom: 3px solid #0A558C;
  }
`;

function Home() {
  return (
    <div>
      <div className="bg-blue-2">
        <div className="container mx-auto px-6">
          <h1 className="text-blue-10 text-5xl pt-32 pb-6 font-normal">USACO Helper</h1>
          <p className="text-blue-10 text-2xl pb-20">USACO Helper is a platform that aims to assist USACO contestants and competitive programmers.</p>

          <Features className="bg-white shadow-md p-6 md:p-10 text-grey-1">
            <FeaturesTitle className="text-4xl font-normal mb-5">Features</FeaturesTitle>

            <ul className="list-reset flex flex-wrap">
              <BulletListItem className="w-full lg:w-1/2 mb-2 sm:mb-0">Create, edit, and share code snippets</BulletListItem>
              <BulletListItem className="w-full lg:w-1/2 mb-2 sm:mb-0">Calculate log base 2 with ease</BulletListItem>
              <BulletListItem className="w-full lg:w-1/2 mb-2 sm:mb-0">Fully open-source</BulletListItem>
              <BulletListItem className="w-full lg:w-1/2 mb-2 sm:mb-0">Get notified when USACO releases results (Coming Soon!)</BulletListItem>
              <BulletListItem className="w-full lg:w-1/2 mb-2 sm:mb-0">View compiled USACO results (Coming Soon!)</BulletListItem>
              <BulletListItem className="w-full lg:w-1/2 mb-2 sm:mb-0">Calculate USACO contest score (Coming Soon!)</BulletListItem>
              <BulletListItem className="w-full lg:w-1/2 mb-2 sm:mb-0">View ASCII tables (Coming Soon!)</BulletListItem>
              <BulletListItem className="w-full lg:w-1/2 mb-2 sm:mb-0">Output Comparison (Coming Soon!)</BulletListItem>
            </ul>
          </Features>
          &nbsp;
        </div>
      </div>
      <div className="container mx-auto px-6">
        <FeaturesSpace />

        <div className="flex">
          <ActionCard className="flex-1" />
          <ActionCard className="flex-1 mx-6" />
          <ActionCard className="flex-1" />
        </div>
      </div>
    </div>
  );
}

export default Home;
