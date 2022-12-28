import Main from "../components/Main.jsx";
import MainIndex from "../components/MainIndex.jsx";
import SideBar from "../components/SideBar";
export default function Home() {
  // const { data: session } = useSession();

  return (
    <div className="w-screen h-screen">
      <div className="w-full flex h-[100%]" >
        <SideBar />
        <Main insert={<MainIndex/>}/>
      </div>
    </div>
  );
}
