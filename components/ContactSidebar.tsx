import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./common/Button";
import { HiPlus } from "react-icons/hi";
import AddLiveStreamModal from "./AddLiveStreamModal";
import AddHHModal from "./AddHHModal";
import ConnectWallet from "./common/ConnectWallet";
import { PrimaryButton } from "./common/PrimaryButton";

export const ContactSidebar = () => {
  const [isStreamClicked, setIsStreamClicked] = useState(false);
  const [isHHClicked, setIsHHClicked] = useState(false);

  return (
    <Wrapper>
      <ConnectWallet />
      <MainContainer>
        <TitleContainer>
          <Title>Hacker Houses</Title>
          <HiPlus onClick={() => setIsStreamClicked(true)} />
        </TitleContainer>
        <TitleContainer>
          <Title>Video calls</Title>
          <HiPlus onClick={() => setIsHHClicked(true)} />
        </TitleContainer>
        <AddLiveStreamModal
          isOpen={isStreamClicked}
          onClose={() => setIsStreamClicked(false)}
        />
        <AddHHModal
          isOpen={isHHClicked}
          onClose={() => setIsHHClicked(false)}
        />
        <PrimaryButton>Log out</PrimaryButton>
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const MainContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 294px;
  height: 1098px;
  border-radius: 30px;
  background-color: #151419;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div``;
