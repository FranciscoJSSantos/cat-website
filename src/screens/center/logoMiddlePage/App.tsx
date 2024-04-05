import cat3 from "../../../assets/cats/cat3.png";
import FunnyCat from "../../../assets/cats/funny_cat.gif";

function LogoMiddlePage() {
  return (
    <>
      <div className="flex justify-center">
        <img src={cat3} className="w-56 h-56 sm:w-96 sm:h-96 rounded-full" />
      </div>
    </>
  );
}

export default LogoMiddlePage;
