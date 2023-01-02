import Card4 from "./Card4";

function SongReasult({reasult,loading}) {
    console.log(reasult);
  return (
    <div className="w-full">
        {reasult && reasult.map((e,i)=>{
            return <Card4 index={1+i} key={e.id} title={e.name} url={e.album?.images[2].url} album={e.album?.name} time={e.duration_ms} subtitle={e.artists[0]?.name}/>
        })}
    </div>
  )
}

export default SongReasult