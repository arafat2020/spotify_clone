import React from "react";
import Card1 from "./Card1";

function ArtistsReasult({ reasult, loading }) {
  return (
    <div className="w-full flex flex-wrap items-center justify-around">
      {reasult &&
        reasult.map((e) => {
          return (
            <Card1
              key={e.id}
              artist={true}
              image={e.images[1]?.url && e.images[1].url}
              title={e.name}
              subtitle={e.type}
            />
          );
        })}
    </div>
  );
}

export default ArtistsReasult;
