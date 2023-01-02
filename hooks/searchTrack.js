import { useEffect, useState } from "react";
import { spiApi } from "../lib/spotify";

export default function useSearch({ token, term, limit = 10, offset = 0 }) {
  const [trackReasult, setTrackReasult] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    async function LoadSearch() {
      setLoading(true);
      await spiApi.setAccessToken(token);
      await spiApi
        .searchTracks(term, { limit: limit, offset: offset })
        .then((res) => {
          setTrackReasult(res.body.tracks.items);
          setLoading(false);
        })
        .catch((err) => {
          setErr(err);
          setLoading(false);
        });
    }
    LoadSearch();
  }, [token, term]);
  return {
    trackReasylt: trackReasult,
    loading: loading,
    error: err,
  };
}
