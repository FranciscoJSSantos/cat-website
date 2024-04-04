import { Button } from "@/components/ui/button";
import { MdPlayArrow } from "react-icons/md";

function ColumnButtons() {
  return (
    <>
      <div className="grid-cols-2 gap-4 sm:grid-cols-1 grid justify-start lg:w-auto sm:w-1/3 mb-12 sm:mb-0 mr-2">
        <Button
          className="text-black bg-[#F0F0FB] md:text-lg text-sm flex justify-start ml-2 p-8 rounded-full font-bold"
          variant="catGhost"
        >
          <MdPlayArrow className="mr-2" />
          galeria de fotos
        </Button>
        <Button
          className="text-black bg-[#F0F0FB] md:text-lg text-sm flex justify-start ml-2 p-8 rounded-full font-bold"
          variant="catGhost"
        >
          <MdPlayArrow className="mr-2" />
          exames
        </Button>

        <Button
          className="text-black bg-[#F0F0FB] md:text-lg text-sm flex justify-start ml-2 p-8 rounded-full font-bold"
          variant="catGhost"
        >
          <MdPlayArrow className="mr-2" />
          vacinas
        </Button>
        <Button
          className="text-black bg-[#F0F0FB] md:text-lg text-sm flex justify-start ml-2 p-8 rounded-full font-bold"
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
