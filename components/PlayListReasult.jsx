import React from "react";
import Card1 from "./Card1";

function PlayListReasult({ reasult, loading }) {
  return (
    <div className="w-full flex flex-wrap items-center justify-around">
      {reasult &&
        reasult.map((e) => {
          return (
            <Card1
              key={e.id}
              image={e.images[1]?.url && e.images[1].url}
              title={e.name}
              subtitle={`By ${e.owner?.display_name}`}
            />
          );
        })}
    </div>
  );
}

export default PlayListReasult;
