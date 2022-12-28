import { Skeleton } from "@mui/material";

export default function CradLoader() {
  const Card = () => {
    return (
      <div className="flex flex-col  w-[200px] font-sans glass_bg p-[10px] rounded-md mt-6 ">
        <Skeleton
          variant="rounded"
          sx={{
            width: "180px",
            height: "180px",
            bgcolor: "rgb(140, 139, 139)",
          }}
        />
        <div className="text-center mt-1 ">
          <Skeleton variant="text" sx={{ width: "100px", fontSize: "rem",bgcolor: "rgb(140, 139, 139)", margin:'0 auto' }} />
          <Skeleton variant="text" sx={{ width: "100px", fontSize: ".5rem",bgcolor: "rgb(140, 139, 139)", margin:'0 auto' }} />
        </div>
      </div>
    );
  };
  return(
    <div className="w-full flex flex-wrap items-center justify-around">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  );
}
