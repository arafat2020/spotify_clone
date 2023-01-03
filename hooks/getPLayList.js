import React, { useEffect, useState } from "react";
import { spiApi } from "../lib/spotify";

function useGetPLayList({ id, token }) {
  const [playist, setPlayList] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    const loader = () => {
      token && spiApi.setAccessToken(token);
      token &&
        id &&
        spiApi
          .getPlaylist(id)
          .then((res) => {
            setPlayList(res.body);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setErr(err);
          });
    };
    loader();
  }, [token, id]);
  return {
    playist,
    loading,
    err,
  };
}

export default useGetPLayList;
