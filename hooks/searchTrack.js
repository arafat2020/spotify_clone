import { useEffect, useState } from "react";
import { spiApi } from "../lib/spotify";


export default function useSearch({ token, term }) {
  const [trackReasult, setTrackReasult] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    async function LoadSearch() {
      setLoading(true)
      await spiApi.setAccessToken(token);
      await spiApi
        .searchTracks(term)
        .then((res) => {
          setTrackReasult(res.body);
          setLoading(false);
        })
        .catch((err) => {
          setErr(err);
          setLoading(false);
        });
    }
    LoadSearch()
  }, [token, term]);
  return {
    trackReasylt: trackReasult,
    loading: loading,
    error: err,
  };
}
