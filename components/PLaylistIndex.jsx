import { useSession } from "next-auth/react";
import React from "react";
import LazyLoad from "react-lazy-load";
import { formatTIme } from "../lib/formatTIme";
import Card4 from "./Card4";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { truncateString } from "../lib/truncate";
import useGetUser from "../hooks/getUser";
import { Skeleton } from "@mui/material";

function PLaylistIndex({ obj, loading }) {
  const { data: session } = useSession();
  const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
  const totalDuration = () => {
    return obj?.tracks?.items.map((e) => {
      return e.track.duration_ms;
    });
  };
  const { user, loading: userLD } = useGetUser({
    token: session.user.accessToken,
    userID: obj?.owner.id,
  });
  console.log(user, obj);

  return (
    <div
      className="w-full h-full  overflow-y-scroll scrollbar-hide"
      style={{
        background: `linear-gradient(#${randomColor()},black)`,
      }}
    >
      <div className="w-full h-[50%] flex pt-9 pl-7">
        {loading ? (
          <Skeleton
            variant="rectangular"
            sx={{
              width: "250px",
              height: "250px",
              background: "rgb(140, 142, 145)",
            }}
          />
        ) : (
          <LazyLoad>
            <img
              src={obj?.images[0]?.url}
              alt="img"
              className="w-[250px] h-[250px] object-contain"
            />
          </LazyLoad>
        )}
        <div className="h-[250px] flex flex-col justify-between p-4">
          <p className="text-white font-sans uppercase text-[12px] font-semibold">
            {loading ? (
              <Skeleton
                variant="text"
                sx={{
                  background: "rgb(140, 142, 145)",
                  fontSize: "12px",
                  width: "80px",
                }}
              />
            ) : (
              obj?.type
            )}
          </p>
          <h3 className="text-white text-8xl font-sans font-bold">
            {loading ? (
              <Skeleton
                variant="text"
                sx={{
                  background: "rgb(140, 142, 145)",
                  fontSize: "6rem",
                  width: "400px",
                }}
              />
            ) : (
              truncateString(obj?.name, 10)
            )}
          </h3>
          <div className="space-y-1">
            <p className="text-[15px] text-slate-400"> {obj?.description}</p>
            <div className="flex space-x-1">
              {userLD ? (
                <Skeleton
                  variant="circular"
                  sx={{ width: "25px", height: "25px" }}
                />
              ) : (
                <LazyLoad>
                  <img
                    src={
                      user && user.images[0]?.url
                        ? user.images[0]?.url
                        : session.user.image
                    }
                    className="w-[25px] h-[25px] rounded-full"
                    loading="lazy"
                    alt="Avater"
                  />
                </LazyLoad>
              )}
              {loading ? (
                <Skeleton variant="text" sx={{
                  background: "rgb(140, 142, 145)",
                  fontSize: "12px",
                  width: "230px",
                }} />
              ) : (
                <>
                  <p className="text-white">
                    <span className="font-bold">{obj?.owner.display_name}</span>
                    .
                    <span className="font-[12px]">
                      {obj?.tracks.total} Songs,
                    </span>
                  </p>
                  <p className="text-slate-400 font-sans">
                    {formatTIme(
                      totalDuration()?.reduce(
                        (partialSum, a) => partialSum + a,
                        0
                      ),
                      "ms"
                    )}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[50%] glass_bg2 rounded-none">
        <div className="flex space-x-5 p-3">
          <PlayArrowIcon
            sx={{
              fontSize: "60px",
              background: "rgb(94, 252, 3)",
              borderRadius: "50%",
              padding: "10px",
            }}
          />
          <MoreHorizIcon
            sx={{ fontSize: "60px", color: "rgb(209, 212, 207" }}
          />
        </div>
        <h4 className="text-slate-400 m-3">#TITLE</h4>
        <hr className="border-none bg-slate-600 h-[2px] w-[95%] mx-auto  m-3" />
        {obj?.tracks.items.map((e, i) => {
          return (
            <Card4
              key={e.id}
              index={0 + i}
              title={e.track.name}
              subtitle={e.track.artists[0].name}
              url={e.track.album.images[2]?.url}
              album={e.track.album.name}
              time={e.track.duration_ms}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PLaylistIndex;
