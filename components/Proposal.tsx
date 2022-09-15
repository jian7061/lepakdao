import styled from "styled-components";
import Image from "next/image";
import { PrimaryButton } from "./common/PrimaryButton";

export type ProposalProps = {
  name: string;
  role: string;
  image: string;
  desc: string;
  date: string;
};

export const Proposal = ({ proposal }: { proposal: ProposalProps }) => {
  return (
    <Wrapper>
      <ProfilePictureWrapper>
        <ProfilePicture src={proposal.image} />
      </ProfilePictureWrapper>
      <Role>{proposal.role}</Role>
      <Desc>{proposal.desc.slice(0, 60)}</Desc>
      <Date>{proposal.date}</Date>
      <StyledButton>Approve</StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #595665;
  font-size: 15px;
  padding: 20px 40px 20px 20px;
`;

const ProfilePictureWrapper = styled.div`
  display: flex;
  width: 54px;
  height: 54px;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  align-items: center;
  background: #f2f2f2;
  margin-right: 35px;
`;

const ProfilePicture = styled.img`
  width: 100%;
`;

const Role = styled.div``;

const Desc = styled.div``;

const Date = styled.div``;

const StyledButton = styled(PrimaryButton)`
  width: 122px;
  height: 37px;
  font-size: 15px;
  line-height: 0px;
`;
