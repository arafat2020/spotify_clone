import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { SERVER_URL_$ } from "../lib/serverConfig";

export const TunContext = createContext();

export const TuneProvider = ({ children }) => {
  const [plist, setPlist] = useState();
  const [track, setTrack] = useState();
  const [side, setSide] = useState(false);
  const [ld, setLd] = useState(false);
  const [data, setData] = useState();
  const [st, setSt] = useState();

  return (
    <TunContext.Provider
      value={{
        plist,
        setPlist,
        track,
        setTrack,
        side,
        setSide,
        data,
        setData,
        st,
        setSt
      }}
    >
      {ld ? <h2>loading...</h2> : children}
    </TunContext.Provider>
  );
};
