import styled, { css } from "styled-components";

type sizeProp = {
  width: string;
  height: string;
};

export const InfoPanel = ({
  children,
  title,
  size,
}: {
  children?: any;
  title: string;
  size: sizeProp;
}) => {
  return (
    <Wrapper style={size}>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #151419;
  color: #ffffff;
  font-size: 25px;
  border-radius: 30px;
  padding: 20px;
  margin-right: 45px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 25px;
`;
