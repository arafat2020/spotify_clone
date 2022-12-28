import { TuneProvider } from "../provider/tuneprovider";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <TuneProvider>
        <Component {...pageProps} />
      </TuneProvider>
    </SessionProvider>
  );
}

export default MyApp;
