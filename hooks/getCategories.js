import React, { useEffect, useState } from "react";
import { spiApi } from "../lib/spotify";

function useCategories({ token }) {
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    async function loader() {
      token && (await spiApi.setAccessToken(token));
      token &&
        (await spiApi
          .getCategories({
            limit: 40,
            offset: 0,
            country: "US",
           
          })
          .then((res) => {
            setCategory(res.body.categories.items);
            setLoading(false);
          })
          .catch((err) => {
            setErr(err);
            setLoading(false);
          }));
    }
    loader()
  }, [token]);
  return {
    category,
    loading,
    err,
  };
}

export default useCategories;
