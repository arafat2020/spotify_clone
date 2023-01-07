import React, { useEffect, useState } from "react";
import { spiApi } from "../lib/spotify";

function useGenreSeed({ token }) {
  const [genre, setGenre] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    async function loader() {
      (await token) && spiApi.setAccessToken(token);
      await spiApi
        .getAvailableGenreSeeds()
        .then((res) => {
          setGenre(res.body.genres);
          setLoading(false);
        })
        .catch((err) => {
          setErr(err);
          setLoading(false);
        });
    }
    loader();
  }, [token]);
  return {
    genre,
    loading,
    err,
  };
}

export default useGenreSeed;
