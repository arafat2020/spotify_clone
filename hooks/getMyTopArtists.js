import axios from "axios";
import { useEffect, useState } from "react";
function useMyTop({ token,top='tracks' }) {
  const [toper, setTop] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.spotify.com/v1/me/top/${top}?limit=4`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setLoading(false)
        setTop(res.data.items);
      })
      .catch((err) => {
        setLoading(false)
        console.log(err);
      });
  }, [token,top]);
  return {
    toper,
    loading,
    err,
  };
}

export default useMyTop;
