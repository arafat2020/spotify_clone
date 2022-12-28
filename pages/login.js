import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

function Login({ provider }) {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <img className="w-[300px] h-[120px]" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"/>
        {Object.values(provider).map((e) => {
          return (
            <button
             className="bg-green-500 text-white font-semibold p-3 rounded-md"
              key={e.id}
              onClick={() => signIn(e.id, { callbackUrl: "/" })}
            >
              Login with {e.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const provider = await getProviders();
  return {
    props: {
      provider,
    },
  };
}

export default Login;
