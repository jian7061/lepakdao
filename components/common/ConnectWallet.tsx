import styled from "styled-components";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Button } from "./Button";

export default function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  return (
    <Wrapper>
      {isConnected ? (
        <Button onClick={() => disconnect()}>
          {address?.slice(0, 7)}...{address?.slice(-5)}
        </Button>
      ) : (
        <Button onClick={() => connect()}>Connect Wallet</Button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
`;
