import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useCategory from "../hooks/getCategory";
import useGenreSeed from "../hooks/getGenreSeed";
import Card1 from "./Card1";

function GenreIndex() {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const { category,err,loading } = useCategory({
    token: session?.user.accessToken,
    name:id
  });
  console.log(category,err);
  return <div className="w-full h-full overflow-y-scroll scrollbar-hide">
    <h2 className="text-xl text-white font-sans font-bold sm:m-5 mt-9 ml-3">
        Playlist for Genre
    </h2>
    <div className="w-full flex flex-wrap items-center justify-around">
        {!loading &&
             category?.map((e) => {
                return (
                  <div key={e.id} onClick={()=>router.push(`/playlist/${e.id}`)}>
                    <Card1
                      key={e.id}
                      image={e.images[0].url}
                      title={e.name}
                      subtitle={e.description}
                    />
                  </div>
                );
              })
        }
    </div>
  </div>;
}

export default GenreIndex;
