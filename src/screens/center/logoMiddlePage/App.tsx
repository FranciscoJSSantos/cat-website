import FunnyCat from "../../../assets/cats/funny_cat.gif";

function LogoMiddlePage() {
  return (
    <>
      <div className="flex justify-center">
        <img src={FunnyCat} className="w-56 h-56 sm:w-96 sm:h-96 rounded-full" />
      </div>
    </>
  );
}

export default LogoMiddlePage;
