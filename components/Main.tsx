import styled from "styled-components";
import { Button } from "./common/Button";
import Link from "next/link";

export default function Main() {
  return (
    <Wrapper>
      <Title>Connecting builders in South Eash Asia.</Title>
      <Desc>
        Build lasting connection with DAO members, enjoy co-working and
        co-living spaces IRL, on-chain membership roles, governance and much
        more!
      </Desc>
      <Link href="/join">
        <StyledButton>Join now!</StyledButton>
      </Link>
      <SponsorsContainer>
        <Sponsor />
      </SponsorsContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div``;

const Desc = styled.div``;

const StyledButton = styled(Button)`
  width: 404px;
  height: 92px;
  font-size: 30px;
  font-weight: 600;
`;
const SponsorsContainer = styled.div``;

const Sponsor = styled.div``;
