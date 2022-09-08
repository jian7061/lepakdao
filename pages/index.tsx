import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { extractLinearGradientParamsFromTransform } from "@figma-plugin/helpers";

const Home: NextPage = () => {
  return (
    <Wrapper>
      {/* <Sidebar /> */}
      <MainContainer>
        {/* <Header /> */}
        {/* <Main /> */}
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  max-width: 100vw;
  background-color: #4570d8;
  color: white;
  display: grid;
  place-items: center;
`;

const MainContainer = styled.div`
  flex: 1;
`;

export default Home;
