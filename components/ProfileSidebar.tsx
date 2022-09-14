import React, { useState } from "react";
import styled from "styled-components";
import Profile from "./common/Profile";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Button } from "./common/Button";

const user = {
  name: "Jian Kim",
  role: "Member",
  image: "",
  socialMedia: [
    { name: "telegram", link: "", icon: <FaTelegramPlane /> },
    { name: "twitter", link: "", icon: <BsTwitter /> },
    { name: "github", link: "", icon: <BsGithub /> },
    { name: "mail", link: "", icon: <IoIosMail /> },
  ],
};

export const ProfileSidebar = () => {
  return (
    <Wrapper>
      <Logo>LEPAK</Logo>
      <Profile user={user} />
      <Button>Invite a friend</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 386px;
  height: 1208px;
  margin: 0 55px;
  background-color: #151419;
`;

const Logo = styled.h1``;
