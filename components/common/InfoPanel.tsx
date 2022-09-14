import styled, { css } from "styled-components";

type sizeProp = {
  width: string;
  height: string;
};

export const InfoPanel = ({
  title,
  size,
}: {
  title: string;
  size: sizeProp;
}) => {
  return (
    <Wrapper style={size}>
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #151419;
  color: #ffffff;
  font-size: 25px;
  border-radius: 1rem;
  padding: 1rem;
  margin-right: 45px;
`;

const Title = styled.div``;
