import styled from "styled-components";

const colors = {
  black: "#000000",
  white: "#ffffff",
  bgColor: "#151419",
  textColor: "#403f44",
  stroke: "#13131b",
  themeColor: "#6868b4",
};

const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

export const theme = {
  colors,
  common,
};

export default theme;
