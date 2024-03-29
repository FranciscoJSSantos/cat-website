import { Button } from "@/components/ui/button";
import { MdPlayArrow } from "react-icons/md";

function ColumnButtons() {
  return (
    <>
      <div className="grid justify-start w-1/3">
        <Button
          className="text-black bg-[#F0F0FB] text-lg flex justify-start ml-2 p-8 rounded-full font-bold"
          variant="catGhost"
        >
          <MdPlayArrow className="mr-2" />
          galeria de fotos
        </Button>
        <Button
          className="text-black bg-[#F0F0FB] text-lg flex justify-start ml-2 p-8 rounded-full font-bold"
          variant="catGhost"
        >
          <MdPlayArrow className="mr-2" />
          consultas/exames
        </Button>

        <Button
          className="text-black bg-[#F0F0FB] text-lg flex justify-start ml-2 p-8 rounded-full font-bold"
          variant="catGhost"
        >
          <MdPlayArrow className="mr-2" />
          vacinas
        </Button>
        <Button
          className="text-black bg-[#F0F0FB] text-lg flex justify-start ml-2 p-8 rounded-full font-bold"
          variant="catGhost"
        >
          <MdPlayArrow className="mr-2" />
          <a href="/medicacoes" className="ease-in">
            medicações
          </a>
        </Button>
      </div>
    </>
  );
}

export default ColumnButtons;
