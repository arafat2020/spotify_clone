import { createContext, useState } from "react";

export const TunContext = createContext();

export const TuneProvider = ({ children }) => {
  const [plist, setPlist] = useState();
  const [track,setTrack] = useState()
  const [side,setSide] = useState(false)
  return (
    <TunContext.Provider
      value={{
        plist,
        setPlist,
        track,
        setTrack,
        side,
        setSide
      }}
    >
      {children}
    </TunContext.Provider>
  );
};
