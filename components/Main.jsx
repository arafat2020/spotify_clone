import { signOut, useSession } from "next-auth/react";
import { truncateString } from "../lib/truncate";

function Main({ insert }) {
  const {data:session}=useSession()
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div
      className={`w-[70%] h-[100%] bg-[#1d1d1d] overflow-y-scroll scrollbar-hide`}
    >
      <div className="absolute top-3 right-3 flex glass glass_bg space-x-2 z-10 rounded-full w-[200px] p-1">
        <img className="w-[30px] h-[30px]  rounded-full border" src={session && session.user.image} alt='img' loading="lazy"/>
        <button
          className="text-white "
          onClick={() => {
            signOut({ callbackUrl: "/login" });
          }}
        >
          {session && truncateString(session.user.name,10)}
        </button>
      </div>
      {insert}
    </div>
  );
}

export default Main;
