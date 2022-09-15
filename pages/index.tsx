import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Main from "../components/Main";
const Home: NextPage = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Montserrat";
  height: 100vh;
  max-width: 100vw;
  background-color: black;
  color: #ffffff;
`;

export default Home;
