import useRecenlyPlayed from "../hooks/getMyRecentlyPlayedTracks";
import { useSession } from "next-auth/react";
import Card1 from "./Card1";
import useNewReleases from "../hooks/getNewReleases";
import useFeaturedPlaylists from "../hooks/getFeaturedPlaylists";
import CradLoader from "./sceletonLoader/CradLoader";
import CradLoader2 from "./sceletonLoader/CardLoader2";

import { useRouter } from "next/router";
import { useContext } from "react";
import { TunContext } from "../provider/tuneprovider";
import { Skeleton } from "@mui/material";
import useMyTopArtist from "../hooks/getMyTopArtists";
import Card3 from './Card3'

function MainIndex() {
  const { data: session } = useSession();
  const router = useRouter();
  const { played, err, loading, lenght } = useRecenlyPlayed({
    token: session?.user.accessToken,
  });
  const { setPlist } = useContext(TunContext);
  const {
    newReleas,
    err: newerr,
    loading: newld,
  } = useNewReleases({
    token: session?.user.accessToken,
  });
  const {
    featurePLaylist,
    err: fErr,
    loading: fLd,
  } = useFeaturedPlaylists({
    token: session?.user.accessToken,
  });
  const { toper,err:srErr,loading:topLD } = useMyTopArtist({
    token: session?.user.accessToken,
  });
  console.log(toper);
  // console.log(session);
  return (
    <div className="w-full">
        {!topLD  ? (
        <h1 className="text-2xl text-white font-sans font-bold m-5">
          {toper && "Your top Track"}
        </h1>
      ) : (
        <Skeleton
          variant="text"
          sx={{
            fontSize: "3rem",
            bgcolor: "rgb(140, 139, 139)",
            margin: "1.25rem",
            width: "300px",
            borderRadius: "1rem",
          }}
        />
      )}
      <div className="w-full flex flex-wrap items-center justify-around ">
        {topLD ? (
          <CradLoader2 limit={4} />
        ) : (
          toper?.map((e) => {
            return (
              <div
                id={e.id}
                onClick={() => {
                  router.push(`/track/${e.track?.id}`);
                  setPlist(e.context == !null && e.context.uri);
                }}
              >
                <Card3
                img={e.album.images[2].url} 
                title={e.artists[0].name}                 
                />
              </div>
            );
          })
        )}
      </div>
      {!loading ? (
        <h1 className="text-2xl text-white font-sans font-bold m-5">
          {lenght != 0 && "Recently PLayed"}
        </h1>
      ) : (
        <Skeleton
          variant="text"
          sx={{
            fontSize: "3rem",
            bgcolor: "rgb(140, 139, 139)",
            margin: "1.25rem",
            width: "300px",
            borderRadius: "2rem",
          }}
        />
      )}
      <div className="w-full flex flex-wrap items-center justify-around ">
        {loading ? (
          <CradLoader />
        ) : (
          played?.map((e) => {
            return (
              <div
                id={e.track?.id}
                onClick={() => {
                  router.push(`/track/${e.track?.id}`);
                  setPlist(e.context == !null && e.context.uri);
                }}
              >
                <Card1
                  image={e.track?.album.images[1].url}
                  title={e.track?.name}
                  subtitle={e.track?.artists[0].name}
                />
              </div>
            );
          })
        )}
      </div>
      {!newld ? (
        <h1 className="text-2xl text-white font-sans font-bold m-5">
          New Releas
        </h1>
      ) : (
        <Skeleton
          variant="text"
          sx={{
            fontSize: "3rem",
            bgcolor: "rgb(140, 139, 139)",
            margin: "1.25rem",
            width: "300px",
          }}
        />
      )}
      <div className="w-full flex flex-wrap items-center justify-around">
        {newld ? (
          <CradLoader />
        ) : (
          newReleas?.map((e) => {
            return (
              <div id={e.id} onClick={() => router.push(`/track/${e.id}`)}>
                <Card1
                  image={e.images[1].url}
                  title={e.name}
                  subtitle={e.artists[0].name}
                />
              </div>
            );
          })
        )}
      </div>
      {!fLd && (
        <h1 className="text-2xl text-white font-sans font-bold m-5">
          Featured Playlist
        </h1>
      )}
      <div className="w-full flex flex-wrap items-center justify-around">
        {fLd ? (
          <CradLoader />
        ) : (
          featurePLaylist?.map((e) => {
            return (
              <Card1
                image={e.images[0].url}
                title={e.name}
                subtitle={e.description}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default MainIndex;
