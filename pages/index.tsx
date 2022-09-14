import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Main from "../components/Main";
const Home: NextPage = () => {
  return (
    <Wrapper>
      <MainContainer>
        <Header />
        <Main />
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Montserrat";
  height: 100vh;
  max-width: 100vw;
  background-color: #4570d8;
  color: white;
  display: grid;
`;

const MainContainer = styled.div`
  flex: 1;
`;

export default Home;
