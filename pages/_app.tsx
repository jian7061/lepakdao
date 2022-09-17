import "../styles/globals.css";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import { ThemeProvider } from "styled-components";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
    </ThemeProvider>
  );
}

export default MyApp;
