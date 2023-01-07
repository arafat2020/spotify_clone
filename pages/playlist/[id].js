import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import Main from "../../components/Main";
import PLaylistIndex from "../../components/PLaylistIndex";
import SideBar from "../../components/SideBar";
import useGetPLayList from "../../hooks/getPLayList";

function Playlist() {
  const router = useRouter();
  const { id } = router.query;
  const { data:session} = useSession()
  const {playist,loading,err} = useGetPLayList({
    token:session?.user.accessToken,
    id:id
  })
//   console.log((playist));
  return (
    <div className="w-screen h-screen">
      <div className="w-full flex h-[100%]">
        <SideBar />
        <Main insert={<PLaylistIndex obj={playist} loading={loading}/>} />
      </div>
    </div>
  );
}

export default Playlist;
