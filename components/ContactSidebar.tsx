import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./common/Button";
import { HiPlus } from "react-icons/hi";
import AddLiveStreamModal from "./AddLiveStreamModal";
import AddHHModal from "./AddHHModal";
import ConnectWallet from "./common/ConnectWallet";
import { PrimaryButton } from "./common/PrimaryButton";
import { HackerHouse } from "./HackerHouse";
import { Meeting } from "./Meeting";

export const ContactSidebar = () => {
  const [isStreamClicked, setIsStreamClicked] = useState(false);
  const [isHHClicked, setIsHHClicked] = useState(false);
  const hackerHouses = [
    {
      name: "Kuala Lumpur HH 🌇",
      duration: "Sept 28 2022 - Dec 28 2022",
    },
    {
      name: "Bali HH 🏝",
      duration: "Oct 28 2022 - Feb 28 2023",
    },
  ];

  const meetings = [
    {
      name: "Board meeting",
      duration: "Sept 28 2022 - Dec 28 2022",
      description: "You have been invited to attend a meeting of Moderators.",
    },
    {
      name: "Community meeting",
      duration: "Sept 28 2022 - Dec 28 2022",
      description: "You have been invited to attend a meeting for Community.",
    },
  ];
  return (
    <Wrapper>
      <ConnectWallet />
      <MainContainer>
        <HeightWrapper>
          <TitleContainer>
            <Title>Hacker Houses</Title>
            <IconContainer onClick={() => setIsStreamClicked(true)}>
              <HiPlus />
            </IconContainer>
          </TitleContainer>
          {hackerHouses.map((hackerHouse) => {
            return <HackerHouse hackerHouse={hackerHouse} />;
          })}
        </HeightWrapper>
        <HeightWrapper>
          <TitleContainer>
            <Title>Video calls</Title>
            <IconContainer onClick={() => setIsHHClicked(true)}>
              <HiPlus />
            </IconContainer>
          </TitleContainer>
          {meetings.map((meeting) => {
            return <Meeting meeting={meeting} />;
          })}
        </HeightWrapper>
        <AddLiveStreamModal
          isOpen={isStreamClicked}
          onClose={() => setIsStreamClicked(false)}
        />
        <AddHHModal
          isOpen={isHHClicked}
          onClose={() => setIsHHClicked(false)}
        />
        <StyledButton>Log out</StyledButton>
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const MainContainer = styled.div`
  padding: 30px 25px;
  border: 2px solid #13131b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 59px;
  width: 294px;
  height: 1098px;
  border-radius: 30px;
  background-color: #151419;
`;

const HeightWrapper = styled.div`
  height: 40%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 25px;
`;

const IconContainer = styled.div`
  width: 36px;
  height: 36px;
  background-color: rgba(63, 63, 167, 0.12);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: #6868b4;
    font-size: 17px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const StyledButton = styled(PrimaryButton)`
  width: 175px;
  height: 40px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
`;
