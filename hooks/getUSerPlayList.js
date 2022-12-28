import { useEffect, useState } from "react";
import { spiApi } from "../lib/spotify";
function useUSerPlayList({ token }) {
  const [playList, setPlaylist] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    async function loadPLaylist() {
      await spiApi.setAccessToken(token);
      await spiApi
          .getUserPlaylists()
          .then((res) => {
            // console.log(res);
            setPlaylist(res.body.items);
            setLoading(false);
          })
          .catch((err) => {
            setErr(err);
            // console.log(err);
            setLoading(false);
          });
    }
    loadPLaylist();
  },[token]);
  return {
    loading,
    err,
    playList,
  };
}

export default useUSerPlayList;
