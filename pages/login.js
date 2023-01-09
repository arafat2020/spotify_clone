import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Login() {
  const [pr,setPr]=useState()
  const provider = async () => await getProviders();
  provider().then(res=>{
    setPr(res.spotify.id);
  }).catch(err=>{
    console.log(err);
  })
  const router = useRouter();
  const { status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      const reDirect = () => router.push("/");
      reDirect();
    }
  }, [status]);
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <img
          className="w-[300px] h-[120px]"
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
        />
        {pr && (
          <button
            className="bg-green-500 text-white font-semibold p-3 rounded-md"
            key={pr}
            onClick={() => signIn(pr, { callbackUrl: "/" })}
          >
            Login with {pr}
          </button>
        )}
      </div>
    </div>
  );
}

