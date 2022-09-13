import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { extractLinearGradientParamsFromTransform } from "@figma-plugin/helpers";
import Header from "../components/Header";
import JoinModal from "../components/JoinModal";
import { useState, useEffect } from "react";
import Main from "../components/Main";
const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  const onClose = () => {};
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
