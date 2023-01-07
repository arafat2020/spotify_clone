import React, { useEffect, useState } from 'react'
import { spiApi } from '../lib/spotify';

function useSaved({token}) {
    const [saved, setSaved] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(()=>{
    async function loader(){
        await token && spiApi.setAccessToken(token)
        await spiApi.getMySavedTracks({limit:10}).then(res=>{
            setSaved(res.body.items)
            setLoading(false)
        }).catch(err=>{
            setErr(err)
            setLoading(false)
        })
    }
    loader()
  },[token])
  return{
    saved,
    loading,
    err
  }
}

export default useSaved