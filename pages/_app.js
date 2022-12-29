import { TuneProvider } from "../provider/tuneprovider";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  console.log(session);
  return (
    <SessionProvider session={session}>
      <TuneProvider>
        <Component {...pageProps} />
      </TuneProvider>
    </SessionProvider>
  );
}

export default MyApp;
