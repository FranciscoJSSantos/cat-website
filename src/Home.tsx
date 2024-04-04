import Bottom from "./screens/bottom/App";
import Center from "./screens/center/App";
import Top from "./screens/top/App";

function Home() {
  return (
    <>
      <div className="bg-zinc-950 ">
        <Top />
        <Center />
        <Bottom />
      </div>
    </>
  );
}

export default Home;
