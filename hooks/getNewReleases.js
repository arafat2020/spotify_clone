import { useEffect, useState } from "react";
import { spiApi } from "../lib/spotify";

function useNewReleases({ token }) {
  const [newReleas, setNewReleas] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    async function loader() {
      token && (await spiApi.setAccessToken(token));
      token &&
        (await spiApi
          .getNewReleases({limit:4})
          .then((res) => {
            setLoading(false);
            setNewReleas(res.body.albums.items);
          })
          .catch((err) => {
            setLoading(false);
            setErr(err);
          }));
    }
    loader();
  },[token]);
  return {
    newReleas,
    loading,
    err,
  };
}

export default useNewReleases;
