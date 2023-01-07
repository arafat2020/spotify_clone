import React, { useEffect, useState } from "react";
import { spiApi } from "../lib/spotify";

function useGetUser({token,userID}) {
  const [user, setUSer] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(()=>{
    async function loader(){
        setLoading(true)
        await token && spiApi.setAccessToken(token)
        await userID && spiApi.getUser(userID).then(res=>{
            setUSer(res.body)
            setLoading(false)
        }).catch(err=>{
            setLoading(false)
            setErr(err)
        })
    }
    loader()
  },[token,userID])
  return {
    user,
    loading,
    err,
  };
}

export default useGetUser;
