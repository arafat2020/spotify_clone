import React from "react";
import LazyLoad from "react-lazy-load";

function Card2({ title = 'something' ,img='	https://wrapped-images.spotifycdn.com/image/browse-card/wrapped-temp-card.jpg'}) {
  const randomColor =()=> Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.2), #${randomColor()})`,
      }}
      className="w-[200px] h-[200px] rounded-md relative overflow-hidden mt-6 transition"
    >
      <h2 className="text-white font-sans font-bold text-2xl m-2">{title}</h2>
      <LazyLoad>
        <img className="w-[100px] h-[100px] absolute bottom-0 right-0 roted" src={img} alt="img" />
      </LazyLoad>
    </div>
  );
}

export default Card2;
