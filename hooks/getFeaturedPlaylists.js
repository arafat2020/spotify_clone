import  { useEffect, useState } from 'react'
import { spiApi } from '../lib/spotify';

function useFeaturedPlaylists({token}) {
    const [featurePLaylist, setFeaturePlaylist] = useState();
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null)
    useEffect(()=>{
        async function loader(){
            token && await spiApi.setAccessToken(token)
            token && await spiApi.getFeaturedPlaylists({limit:4,country:'US'}).then(res=>{
                setFeaturePlaylist(res.body.playlists.items)
                setLoading(false)
            }).catch(err=>{
                setErr(err)
                setLoading(false)
            })
        }
        loader()
    },[token])
  return {
    featurePLaylist,
    loading,
    err
  }
}

export default useFeaturedPlaylists