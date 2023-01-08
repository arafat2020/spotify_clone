import { TuneProvider } from "../provider/tuneprovider";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import GLoberPlayer from "../components/GLoberPlayer";
import SideDrawer from "../components/SideDrawer";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  console.log(session);
  return (
    <SessionProvider session={session}>
      <TuneProvider>
        <Component {...pageProps} />
        <GLoberPlayer/>
        <SideDrawer/>
      </TuneProvider>
    </SessionProvider>
  );
}

export default MyApp;
