import type { NextPage } from "next";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { ProfileSidebar } from "../ProfileSidebar";
import { ContactSidebar } from "../ContactSidebar";

export const Layout = ({ children }: { children: any }) => {
  const [admin, setAdmin] = useState(true);
  return (
    <Wrapper>
      <ProfileSidebar />
      {children}
      <ContactSidebar admin={admin} />
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
