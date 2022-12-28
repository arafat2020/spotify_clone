import React from "react";
import Main from "../../components/Main";
import SideBar from "../../components/SideBar";
import TrackIndex from "../../components/TrackIndex";

function Track() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full flex h-[100%]">
        <SideBar />
        <Main insert={<TrackIndex/>}  />
      </div>
    </div>
  );
}

export default Track;
