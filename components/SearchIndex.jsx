import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import useCategories from "../hooks/getCategories";
import Card2 from "./Card2";
import SearchIcon from "@mui/icons-material/Search";
import useSearch from "../hooks/searchTrack";

export default function SearchIndex() {
  const { data: session } = useSession();
  const { category, loading, err } = useCategories({
    token: session?.user?.accessToken,
  });
  const [term, setTerm] = useState();
  const { trackReasylt, loading:resLd, err:rsLd } = useSearch({
    token: session?.user?.accessToken,
    term:term
  });
  const ref = useRef();
  useEffect(() => {
    const yt_form = document.getElementById("yt_form");

    yt_form.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        setTerm(ref.current.value);
      }
    });
  });
  console.log(trackReasylt, err);
  return (
    <div className="w-full">
      <div className="bg-white w-1/2 p-3 rounded-full ml-4 mt-3">
        <SearchIcon />
        <input
          id="yt_form"
          ref={ref}
          type="text"
          className="outline-none w-3/4"
          placeholder="What do you want to listen to?"
        />
      </div>
      {!loading && !term && (
        <h2 className="text-2xl text-white font-sans font-bold m-5">
          Brows All
        </h2>
      )}
      <div className="w-full flex flex-wrap items-center justify-around">
        {!term &&
          category?.map((e) => {
            return (
              <div key={e.id}>
                <Card2 img={e.icons[0].url} title={e.name} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
