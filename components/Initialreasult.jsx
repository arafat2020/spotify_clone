import { useState } from "react";

function Initialreasult({ Initialreasult }) {
    const [filte,setFilter] = useState('all')
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
      key: "playlists",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex space-x-2 ml-6 my-5">
        {options.map((e) => {
          return (
            <button
              className={`text-white py-1 px-3 ${filte !== e.key? 'glass_bg2 text-white':'bg-white text-black' } border-none text-[15px] rounded-full   hover:bg-white hover:text-black font-sans transition`}
              key={e.key}
              onClick={()=>setFilter(e.key)}
            >
              {e.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Initialreasult;
