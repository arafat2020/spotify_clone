import React from "react";
import Card1 from "./Card1";

function AlbumReasult({ reasult, loading }) {
  return (
    <div className="w-full flex flex-wrap items-center justify-around">
      {reasult &&
        reasult.map((e) => {
          return (
            <Card1
              key={e.id}
              image={e.images[1]?.url && e.images[1].url}
              title={e.name}
              subtitle={`${e.release_date.split("-")[0]}${` . `}${
                e.artists[0].name
              }`}
            />
          );
        })}
    </div>
  );
}

export default AlbumReasult;
