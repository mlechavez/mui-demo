import type { AppProps } from "next/app";
import ColorModeProvider from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider>
      <Component {...pageProps} />
    </ColorModeProvider>
  );
}

export default MyApp;
