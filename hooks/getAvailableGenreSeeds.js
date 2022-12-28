import { useEffect, useState } from "react";
import { spiApi } from "../lib/spotify";

function useAvailableGenreSeeds({ token }) {
  const [genreseed, setGenraseed] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    async function loader() {
      token && (await spiApi.setAccessToken(token));
      token &&
        (await spiApi
          .getAvailableGenreSeeds()
          .then((res) => {
            setGenraseed(res.body.genres);
            setLoading(false);
          })
          .catch((err) => {
            setErr(err);
            setLoading(false);
          }));
    }
    loader();
  },[]);
  return {
    genreseed,
    loading,
    err,
  };
}

export default useAvailableGenreSeeds;
