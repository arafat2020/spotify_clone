import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import Main from "../components/Main";
import SearchIndex from "../components/SearchIndex";
import SideBar from "../components/SideBar";

export default function Search() {
  const { status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") {
      const reDirect = () => router.push("/login");
      reDirect();
    }
  }, [status]);

  return (
    <div className="w-screen h-screen">
      <div className="w-full flex h-[100%]">
        <SideBar />
        <Main insert={<SearchIndex />} />
      </div>
    </div>
  );
}
