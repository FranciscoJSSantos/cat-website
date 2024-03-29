import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { EditMedication } from "@/components/editMedication copy";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { PiQuestionFill } from "react-icons/pi";
import { RiDeleteBin6Fill } from "react-icons/ri";

interface CardMedicacao {
  id: number;
  nomeRemedio: string;
  quantidade: string;
  horario: string;
  duracao: string;
  sobre: string;
}

function CardMedicacao() {
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

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   axios.post(`${localUrl}/cats_project/`);
  // };

  useEffect(() => {
    axios
      .get(`${localUrl}/cats_project/medicacoes`, {
        method: "GET",
      })
      .then((response) => {
        setDataMedicacao(response.data);
      });
  }, []);

  function dialogSobre(data: CardMedicacao) {
    return (
      <Dialog>
        <DialogTrigger className="remove_mt">
          <PiQuestionFill className="text-2xl text-[#8888ea] cursor-pointer" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Descrição</DialogTitle>
            <DialogDescription>{data.sobre}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  function removeCard() {
    return (
      <>
        <AlertDialog>
          <AlertDialogTrigger className="ml-4 remove_mt">
            <RiDeleteBin6Fill className="text-2xl text-red-600 cursor-pointer" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Tem certeza que deseja excluir ?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Essa ação irá deletar o medicamento selecionado.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Voltar</AlertDialogCancel>
              <AlertDialogAction className="bg-orange-500 hover:bg-orange-800">
                Excluir
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    );
  }

  return (
    <>
      {dataMedicacao.map((data: CardMedicacao) => {
        return (
          <Card className="bg-[#f9f2f2] mx-8 my-2 w-auto h-52" key={data.id}>
            <CardHeader className="flex-row justify-between">
              <div className="flex">
                <CardTitle>{data.nomeRemedio}</CardTitle>
              </div>
              <div className="flex flex-row">
                {data.sobre && data.sobre !== "" ? dialogSobre(data) : ""}
                <Dialog>
                  <DialogTrigger className="ml-4 remove_mt">
                    <MdEdit className="text-2xl text-amber-500 cursor-pointer" />
                  </DialogTrigger>
                  <EditMedication />
                </Dialog>

                {removeCard()}
              </div>
            </CardHeader>
            <div className="mt-6 flex justify-between">
              <h3 className="font-bold ml-6 text-sm">Descrição</h3>
              <div className="flex">
                <p className="mr-4 font-bold text-sm">{data.quantidade}</p>
                <p className="mr-4 font-bold text-sm">{data.horario}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <h3 className="font-bold ml-6 text-sm">Tomar por</h3>
              <div className="flex">
                <p className="mr-4 font-bold text-sm">{data.duracao}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
}

export default CardMedicacao;
