import styled from "styled-components";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ConnectWallet() {
  const [hasJoined, setHasJoined] = useState(false);
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const handleConnect = () => {
    connect();
  };

  useEffect(() => {
    if (isConnected) {
      router.push("/dashboard");
      const checkRegistration = async () => {
        // await
        //setHasJoined(true)
      };
    }
  }, [isConnected]);

  //   useEffect(() => {
  //     if (hasJoined) {
  //       router.push("/register");
  //     } else {
  //       router.push("/dashboard");
  //     }
  //   }, [hasJoined]);

  return (
    <Wrapper>
      {isConnected ? (
        <Button onClick={() => disconnect()}>
          {address?.slice(0, 7)}...{address?.slice(-5)}
        </Button>
      ) : (
        <Button onClick={handleConnect}>Connect Wallet</Button>
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
