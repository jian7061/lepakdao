import styled from "styled-components";
import { HiMinus } from "react-icons/hi";
import { useState } from "react";
import { MeetingProps } from "./ContactSidebar";

export const Meeting = ({ meeting }: { meeting: MeetingProps }) => {
  const [isRemoveClicked, setIsRemoveClicked] = useState(false);
  return (
    <Wrapper>
      <MainContainer>
        <Status />
        <MeetingContainer>
          <h1>{meeting.name}</h1>
          <p>{meeting.duration}</p>
          <p>{meeting.description.slice(0, 31)}</p>
          <p>{meeting.description.slice(31)}</p>
        </MeetingContainer>
        <IconContainer onClick={() => setIsRemoveClicked(true)}>
          <HiMinus />
        </IconContainer>
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 23px;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Status = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #6868b4;
`;

const MeetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 15px;
  }
  p {
    font-size: 10px;
    color: #595665;
  }
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
`;
