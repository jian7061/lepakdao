import styled from "styled-components";

export const PrimaryButton = styled.button`
  font-weight: 400;
  font-size: 30px;
  color: #ffffff;
  background: rgb(70, 112, 216);
  background: linear-gradient(
    90deg,
    rgba(70, 112, 216, 1) 20%,
    rgba(166, 18, 255, 1) 80%
  );
  border-radius: 10px;
  border: none;
  text-align: center;
  padding: 0.8rem;
  width: 316px;
  height: 72px;
  &:hover {
    cursor: pointer;
    color: #7853f7;
    background-color: #fff;
    border: 1px solid #7853f7;
  }
`;
