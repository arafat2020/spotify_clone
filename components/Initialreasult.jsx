import { useState } from "react";
import InitialFilter from "./InitialFilter";

import InitialMAin from "./InitialMAin";

function Initialreasult({ Initialreasult, loading, term }) {
  // console.log(Initialreasult, loading);
  const [filter, setFilter] = useState("all");
  const options = [
    {
      name: "All",
      key: "all",
    },
    {
      name: "Songs",
      key: "track",
    },
    {
      name: "Artists",
      key: "artist",
    },
    {
      name: "Albums",
      key: "album",
    },
    {
      name: "Playlists",
      key: "playlist",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex space-x-2 ml-6 my-5">
        {options.map((e) => {
          return (
            <button
              className={`text-white py-1 px-3 ${
                filter !== e.key ? "glass_bg2 text-white" : "bg-white text-black"
              } border-none text-[15px] rounded-full   hover:bg-white hover:text-black font-sans transition`}
              key={e.key}
              onClick={() => setFilter(e.key)}
            >
              {e.name}
            </button>
          );
        })}
      </div>
      {filter === "all" ? (
        <InitialMAin Initialreasult={Initialreasult} />
      ) : (
        <InitialFilter term={term} filter={filter}/>
      )}
    </div>
  );
}

export default Initialreasult;
