import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { extractLinearGradientParamsFromTransform } from "@figma-plugin/helpers";
import { ProfileSidebar } from "../components/ProfileSidebar";
import ConnectWallet from "../components/common/ConnectWallet";
import { InfoTile } from "../components/common/InfoTile";
import { InfoPanel } from "../components/common/InfoPanel";
import { ContactSidebar } from "../components/ContactSidebar";
import { Layout } from "../components/common/Layout";

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <MainContainer>
        <UserName>Gm,Jian</UserName>
        <InfoContainer>
          <InfoTile title="8.95" description="Total DAO funds" />
          <InfoTile title="4" description="Long term hacker houses" />
          <InfoTile title="245" description="Lepak DAO Members" />
          <InfoPanel
            title="New members"
            size={{ width: "432px", height: "196px" }}
          />
        </InfoContainer>
        <InfoContainer>
          <InfoPanel
            title="Watch live"
            size={{ width: "340px", height: "332px" }}
          />
          <InfoPanel
            title="DAO revenue"
            size={{ width: "830px", height: "332px" }}
          />
        </InfoContainer>
        <InfoPanel
          title="Vote on proposals"
          size={{ width: "1215px", height: "472px" }}
        />
      </MainContainer>
    </Layout>
  );
};

const MainContainer = styled.div`
  margin-right: 60px;
`;

const UserName = styled.div``;

const InfoContainer = styled.div`
  display: flex;
`;
export default Dashboard;
