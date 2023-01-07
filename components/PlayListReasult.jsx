import { useRouter } from "next/router";
import React from "react";
import Card1 from "./Card1";

function PlayListReasult({ reasult, loading }) {
    const router = useRouter()
  return (
    <div className="w-full flex flex-wrap items-center justify-around">
      {reasult &&
        reasult.map((e) => {
          return (
            <div key={e.loading} onClick={()=>router.push(`/playlist/${e.id}`)}>
              <Card1
                key={e.id}
                image={e.images[0]?.url && e.images[0].url}
                title={e.name}
                subtitle={`By ${e.owner?.display_name}`}
              />
            </div>
          );
        })}
    </div>
  );
}

export default PlayListReasult;
