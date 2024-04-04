import ColumnButtons from "./columnButtons/App";
import LogoMiddlePage from "./logoMiddlePage/App";
import SocialMidias from "./socialMidias/App";

function Center() {
  return (
    <>
      <div className="grid sm:flex align-middle justify-around">
        <ColumnButtons />
        <LogoMiddlePage />
        <SocialMidias />
      </div>
    </>
  );
}

export default Center;
