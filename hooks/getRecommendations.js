import { useEffect, useState } from "react";
import { spiApi } from "../lib/spotify";

function useRecomandation({ token, id }) {
  const [reomandation, setRacomantaion] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    async function loader() {
        setLoading(true)
      token && id && (await spiApi.setAccessToken(token));
      token &&
        id &&
        (await spiApi
          .getRecommendations({ seed_tracks: [id],limit:30 })
          .then((res) => {
            setRacomantaion(res.body.tracks);
            setLoading(false);
          })
          .catch((err) => {
            setErr(err);
            setLoading(false);
          }));
    }
    loader();
  }, [id,token]);
  return {
    reomandation,
    loading,
    err,
  };
}

export default useRecomandation;
