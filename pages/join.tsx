import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { extractLinearGradientParamsFromTransform } from "@figma-plugin/helpers";
import Header from "../components/Header";
import JoinModal from "../components/JoinModal";

const Join: NextPage = () => {
  return (
    <Wrapper>
      <MainContainer>
        <Header />
        <JoinModal isOpen onClose={() => {}} id="1" />
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
  padding: 0 2rem;
  display: grid;
`;
const MainContainer = styled.div`
  flex: 1;
`;

export default Join;
