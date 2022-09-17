import styled from "styled-components";
import { FormInput } from "./common/FormInput";

export const ChatInput = () => {
  return (
    <Wrapper>
      <StyledInput placeholder="Start a message" />
      <svg
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.2597 0.0747072C0.730989 0.493242 -0.249849 2.04074 0.0585112 3.54754C0.0920557 3.7114 1.03793 6.12926 2.16049 8.92044L4.20149 13.9954L2.16049 19.0703C1.03793 21.8616 0.0920557 24.2794 0.0585112 24.4432C-0.0765736 25.1034 0.019867 25.7061 0.372595 26.4056C0.597944 26.8525 1.08604 27.3634 1.53702 27.6244C2.147 27.9775 3.18019 28.1038 3.85449 27.9076C4.1106 27.8331 25.7113 17.5024 27.2685 16.7096C29.2049 15.7238 29.5906 13.3178 28.0517 11.8237C27.869 11.6463 27.5445 11.4274 27.2063 11.2533C25.8143 10.5367 4.12664 0.162935 3.85449 0.0834793C3.48663 -0.0239237 2.63697 -0.0285909 2.2597 0.0747072ZM14.498 7.36883C20.6248 10.3095 25.7523 12.7746 25.8926 12.8467L26.1476 12.978L16.0615 12.9798L5.9755 12.9816L4.02561 8.13758C2.73074 4.92083 2.06693 3.203 2.0496 3.02396C1.99293 2.43825 2.54086 1.9194 3.13702 1.9943C3.27278 2.01134 7.66468 4.08899 14.498 7.36883ZM25.9492 15.116C25.8402 15.1729 20.7022 17.6437 14.5316 20.6066C4.1765 25.5788 3.28995 25.9939 3.02182 25.9953C2.49655 25.9981 2.04098 25.554 2.03492 25.0331C2.03316 24.8807 2.59384 23.4232 4.00396 19.9145L5.9755 15.0091L16.0615 15.0108C25.891 15.0125 26.1425 15.0151 25.9492 15.116Z"
          fill="${({ theme }) => theme.colors.themeColor}"
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 25px;
`;

const StyledInput = styled(FormInput)`
  font-size: 15px !important;
  width: 321px;
  height: 43px;
`;
