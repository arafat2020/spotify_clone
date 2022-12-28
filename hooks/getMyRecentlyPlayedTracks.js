import { useEffect, useState } from "react";
import { spiApi } from "../lib/spotify";
function useRecenlyPlayed({token}) {
  const [played, setPlayed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(()=>{
    async function loader(){
       token && await spiApi.setAccessToken(token)
       token && await spiApi.getMyRecentlyPlayedTracks({limit:4}).then(res=>{
        setPlayed(res.body.items)
        setLoading(false)
       }).catch(err=>{
        console.log(err);
        setErr(err)
        setLoading(false)
       })
    }
    loader()

  },[token])
  return {
    played,
    loading,
    err,
    lenght:played.length
  }
}

export default useRecenlyPlayed;
