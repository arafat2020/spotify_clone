import React from "react";
import { truncateString } from "../lib/truncate";

function Card3({
  img = "https://i.scdn.co/image/ab67616d000048511b84102f154deb7a798ed372",
  title = "something",
  subtitle = "somethong",
}) {
  return (
    <div className="glass_bg w-[350px] h-[64px] flex rounded-md overflow-hidden m-5">
      <img height={64} width={64} loading='lazy' src={img} alt="img" />
      <div className="text-white flex flex-col justify-center">
        <p className="text-[15px] font-bold ml-2">{truncateString(title,13)}</p>
        <p className="text-[12px] ml-2">{truncateString(subtitle,13)}</p>
      </div>
    </div>
  );
}

export default Card3;
