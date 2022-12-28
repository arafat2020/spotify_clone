import { Skeleton } from "@mui/material";
import React from "react";

function PlayListLoader() {
  return (
    <div className="space-y-2">
      <Skeleton
        variant="text"
        sx={{
          fontSize: ".5rem",
          bgcolor: "rgb(241 245 249)",
          width: "40%",
          marginLeft:'15px',
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: ".5rem",
          bgcolor: "rgb(241 245 249)",
          width: "40%",
          marginLeft:'15px',
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: ".5rem",
          bgcolor: "rgb(241 245 249)",
          width: "40%",
          marginLeft:'15px',
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: ".5rem",
          bgcolor: "rgb(241 245 249)",
          width: "40%",
          marginLeft:'15px',
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: ".5rem",
          bgcolor: "rgb(241 245 249)",
          width: "40%",
          marginLeft:'15px',
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: ".5rem",
          bgcolor: "rgb(241 245 249)",
          width: "40%",
          marginLeft:'15px',
        }}
      />
      
    </div>
  );
}

export default PlayListLoader;
