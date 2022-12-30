import axios from "axios";
import { useEffect, useState } from "react";

function useInitialSearch({ token, limit = 4, offset = 0 }) {
  const [initialReasult, setIntialReasult] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    token && axios.get(
      `https://api.spotify.com/v1/search?q=chris&type=track%2Cartist%2Cplaylist%2Calbum&market=ES&limit=${limit}&offset=${offset}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
      }
    ).then(res=>{
        setIntialReasult(res.data)
    }).catch(err=>{
        setErr(err)
    });
  }, [token]);
  return {
    initialReasult,
    loading,
    err,
  };
}

export default useInitialSearch;
