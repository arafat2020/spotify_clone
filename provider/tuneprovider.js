import { createContext, useState } from "react";

export const TunContext = createContext();

export const TuneProvider = ({ children }) => {
  const [plist, setPlist] = useState();
  return (
    <TunContext.Provider
      value={{
        plist,
        setPlist,
      }}
    >
      {children}
    </TunContext.Provider>
  );
};
