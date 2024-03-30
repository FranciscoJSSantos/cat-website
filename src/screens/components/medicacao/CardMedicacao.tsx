import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { EditMedicationDialog } from "@/components/editMedication";
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

import { Label } from "@radix-ui/react-label";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../assets/data/remedios";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CardMedicacao {
  id: number;
  nomeRemedio: string;
  quantidade: string;
  horario: string;
  duracao: string;
  sobre: string;
}

const createMedicationSchema = z.object({
  nomeRemedio: z.string(),
  quantidade: z.string(),
  horario: z.string(),
  duracao: z.string(),
  sobre: z.string(),
});

type CreateMedicationSchema = z.infer<typeof createMedicationSchema>;

function CardMedicacao() {
  const localUrl = "http://localhost:3000";

  const [dataMedicacao, setDataMedicacao] = useState([]);
  const [editMedicacao, setEditMedicacao] = useState({
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

  // useEffect(() => {
  //   axios
  //     .get(`${localUrl}/cats_project/medicacoes`, {
  //       method: "GET",
  //     })
  //     .then((response) => {
  //       setDataMedicacao(response.data);
  //     });
  // }, []);

  const { register, handleSubmit } = useForm<CreateMedicationSchema>({
    resolver: zodResolver(createMedicationSchema),
  });

  function handleCreateMedication(data: CreateMedicationSchema) {
    console.log(data);
  }

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

  function editCard() {
    return (
      <Dialog>
        <DialogTrigger className="ml-4 remove_mt">
          <MdEdit className="text-2xl text-amber-500 cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar Medicação</DialogTitle>
            <DialogDescription>Preste atenção na edição 😊</DialogDescription>
          </DialogHeader>
          <form
            onSubmit={handleSubmit(handleCreateMedication)}
            className="space-y-6"
          >
            <div className="grid grid-cols-4 items-center text-right gap-3">
              <Label htmlFor="nomeRemedio">Nome</Label>
              <Input
                id="nomeRemedio"
                {...register("nomeRemedio")}
                className="col-span-3"
                placeholder="Tobramicina"
              />
            </div>
            <div className="grid grid-cols-4 items-center text-right gap-3">
              <Label htmlFor="quantidade" className="text-right">
                Quantidade
              </Label>
              <Input
                {...register("quantidade")}
                id="quantidade"
                className="col-span-3"
                placeholder="1 unid"
              />
            </div>
            <div className="grid grid-cols-4 items-center text-right gap-3">
              <Label htmlFor="horario">A cada</Label>
              <Input
                {...register("horario")}
                id="horario"
                className="col-span-3"
                placeholder="12h"
              />
            </div>
            <div className="grid grid-cols-4 items-center text-right gap-3">
              <Label htmlFor="duracao">Tomar por</Label>
              <Input
                {...register("duracao")}
                id="duracao"
                className="col-span-3"
                placeholder="3 dias"
              />
            </div>
            <div className="grid grid-cols-4 items-center text-right gap-3">
              <Label htmlFor="sobre">Descrição</Label>
              <Textarea
                {...register("sobre")}
                id="sobre"
                className="col-span-3"
                placeholder="Qual a finalidade do remédio.."
              />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
              </DialogClose>
              <Button variant="catGhostEdit" type="submit">
                Alterar
              </Button>
            </DialogFooter>
          </form>
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

  const { data: catRemedios } = useQuery({
    queryKey: ["catRemedios"],
    queryFn: getProducts,
  });

  return (
    <>
      {catRemedios?.map((data: CardMedicacao) => {
        return (
          <Card className="bg-[#f9f2f2] mx-8 my-2 w-auto h-52" key={data.id}>
            <CardHeader className="flex-row justify-between">
              <div className="flex">
                <CardTitle>{data.nomeRemedio}</CardTitle>
              </div>
              <div className="flex flex-row">
                {data.sobre && data.sobre !== "" ? dialogSobre(data) : ""}
                {editCard()}
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
