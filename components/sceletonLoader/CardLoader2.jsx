import { Skeleton } from "@mui/material";
import React from "react";

function CardLoader2({limit=12}) {
  const CardLoader = () => {
    return (
      <div className="glass_bg w-[350px] h-[64px] flex rounded-md overflow-hidden m-5">
        <Skeleton
          variant="rectangular"
          sx={{
            width: "64px",
            height: "64px",
            bgcolor: "rgb(241 245 249)",
          }}
        />
        <div className="flex flex-col justify-center animate-bounce">
          <Skeleton
            variant="text"
            sx={{
              fontSize: "15px",
              bgcolor: "rgb(241 245 249)",
              marginLeft: "15px",
              width:'100px'
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              fontSize: "12px",
              bgcolor: "rgb(241 245 249)",
              marginLeft: "15px",
              width:'100px'
            }}
          />
        </div>
      </div>
    );
  };
  return (
    <div className="w-[100%] h-[100%] overflow-y-scroll scrollbar-hide flex flex-wrap items-center justify-around">
      {Array(limit).fill(0).map((i)=>{
        return <CardLoader key={i}/>
      })}
    </div>
  );
}

export default CardLoader2;
