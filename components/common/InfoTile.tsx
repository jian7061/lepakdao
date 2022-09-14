import styled from "styled-components";
import Image from "next/image";

export const InfoTile = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 1rem;
  background-color: #151419;
  width: 204px;
  height: 196px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  margin-right: 55px;
`;

const Title = styled.div`
  color: #ffffff;
`;

const Description = styled.div`
  color: #595665;
`;
