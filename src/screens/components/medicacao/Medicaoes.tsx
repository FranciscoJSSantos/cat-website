import { FaCircleArrowLeft } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useState } from "react";

import { TiPlus } from "react-icons/ti";

import { CreateMedication } from "@/components/createMedication";
import { MdEdit } from "react-icons/md";
import CardMedicacao from "./CardMedicacao";

function Medicacoes() {
  const localUrl = "http://localhost:3000";

  const [dataMedicacao, setDataMedicacao] = useState([]);
  const [editMedicacao, setEditMedicacao] = useState({
    id: "",
    nomeRemedio: "",
    quantidade: "",
    horario: "",
    duracao: "",
    sobre: "",
  });

  const handleInput = (event: any) => {
    setEditMedicacao({
      ...editMedicacao,
      [event.target.name]: event.target.event,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios.post(`${localUrl}/cats_project/`);
  };

  function createMedication() {
    return (
      <Dialog>
        <DialogTrigger className="ml-4  mt-6">
          <Button variant="catGhostEdit">
            Adicionar Medicação <TiPlus className="ml-2" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Criar Medicação</DialogTitle>
            <DialogDescription>Preste atenção na criação 😜</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-left">
                Nome
              </Label>
              <Input
                onChange={(e) => handleInput(e)}
                value={editMedicacao.nomeRemedio}
                id="nomeRemedio"
                className="col-span-3"
                placeholder="Tobramicina"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantidade" className="text-left">
                Quantidade
              </Label>
              <Input
                onChange={(e) => handleInput(e)}
                value={editMedicacao.quantidade}
                id="quantidade"
                className="col-span-3"
                placeholder="1 unid"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="horario" className="text-left">
                A cada
              </Label>
              <Input
                onChange={(e) => handleInput(e)}
                value={editMedicacao.horario}
                id="horario"
                className="col-span-3"
                placeholder="12h"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="duracao" className="text-left">
                Tomar por
              </Label>
              <Input
                onChange={(e) => handleInput(e)}
                value={editMedicacao.duracao}
                id="duracao"
                className="col-span-3"
                placeholder="3 dias"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="sobre" className="text-left">
                Descrição
              </Label>
              <Textarea
                onChange={(e) => handleInput(e)}
                value={editMedicacao.sobre}
                id="sobre"
                className="col-span-3"
                placeholder="Qual a finalidade do remédio.."
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="catGhostEdit" type="submit">
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <>
      <div className="bg-zinc-950 h-screen w-screen grid">
        <div>
          <a href="/">
            <FaCircleArrowLeft className="ml-6 mt-6 text-[#F0F0FB] text-3xl hover:text-[#8888EA] cursor-pointer" />
          </a>
          <div className="grid flex-row justify-center text-center ">
            <h1 className="text-white text-6xl mt-10 mb-10 mx-auto">
              Medicações
            </h1>
            <Dialog>
              <DialogTrigger className="ml-4 remove_mt">
                <Button className="mx-16" variant="catGhostEdit">
                  Adicionar Medicação <TiPlus className="ml-2" />
                </Button>
              </DialogTrigger>
              <CreateMedication />
            </Dialog>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1">
          <CardMedicacao />
        </div>
      </div>
    </>
  );
}

export default Medicacoes;
