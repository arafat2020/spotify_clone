import React from "react";
import { truncateString } from "../lib/truncate";
import LazyLoad from "react-lazy-load";

function Card1({
  image = "https://i.scdn.co/image/ab67616d00001e0249dafd5f2b002def0f7a449a",
  title = "something",
  subtitle = "somethong",
  artist = false,
}) {
  return (
    <div className="flex flex-col  w-[200px] font-sans glass_bg2 p-[10px] rounded-md mt-6 cursor-pointer">
      <div>
        <LazyLoad>
          <img
            className={`w-[180px] h-[180px]  ${
              artist ? "rounded-full" : "rounded-md"
            }`}
            src={image}
            alt="img"
            loading="lazy"
          />
        </LazyLoad>
      </div>
      <div className="text-center mt-1">
        <p className="text-lg font-bold text-white">
          {truncateString(title, 13)}
        </p>
        <p className="text-sm font-semibold text-slate-400">
          {truncateString(subtitle, 15)}
        </p>
      </div>
    </div>
  );
}

export default Card1;
