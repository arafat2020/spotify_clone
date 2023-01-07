import React from "react";
import GenreIndex from "../../components/GenreIndex.jsx";
import Main from "../../components/Main";
import SideBar from "../../components/SideBar";

function Genre() {
  return (
    <div className="w-screen h-screen">
    <div className="w-full flex h-[100%]">
      <SideBar />
      <Main insert={<GenreIndex/>}  />
    </div>
  </div>
  );
}

export default Genre;
