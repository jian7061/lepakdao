import type { NextPage } from "next";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { ProfileSidebar } from "../ProfileSidebar";
import { ContactSidebar } from "../ContactSidebar";

export const Layout = ({ children }: { children: any }) => {
  return (
    <Wrapper>
      <ProfileSidebar />
      {children}
      <ContactSidebar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Montserrat";
  background-color: black;
  height: 100vh;
  max-width: 100vw;
  color: #ffffff;
  display: flex;
  padding-top: 50px;
`;
