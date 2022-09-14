import type { NextPage } from "next";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { ProfileSidebar } from "../ProfileSidebar";
import { ContactSidebar } from "../ContactSidebar";

export const Layout = ({ children }: { children: any }) => {
  return (
    <Wrapper>
      <MainContainer>
        <ProfileSidebar />
        {children}
        <ContactSidebar />
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Montserrat";
  background-color: black;
  color: #ffffff;
  display: grid;
`;

const MainContainer = styled.div`
  flex: 1;
  display: flex;
`;
