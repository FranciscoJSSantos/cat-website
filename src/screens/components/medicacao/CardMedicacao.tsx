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
import { Label } from "@/components/ui/label";

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


import { useMutation, useQuery } from "@tanstack/react-query";
import { editCatRemedio, getProducts } from "../../../assets/data/remedios";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { queryClient } from "@/lib/react-query";

interface CardMedicacao {
  id: number;
  nomeRemedio: string;
  quantidade: string;
  horario: string;
  duracao: string;
  sobre: string;
}

const editMedicationSchema = z.object({
  nomeRemedio: z.string(),
  quantidade: z.string(),
  horario: z.string(),
  duracao: z.string(),
  sobre: z.string(),
});

type CreateMedicationSchema = z.infer<typeof editMedicationSchema>;

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

  const { register, handleSubmit } = useForm<CreateMedicationSchema>({
    resolver: zodResolver(editMedicationSchema),
  });

  const { mutateAsync: editCatRemedioFn } = useMutation({
    mutationFn: editCatRemedio,
    onSuccess(_, variables) {
      const cached = queryClient.getQueryData(["catRemedios"]);

      queryClient.setQueryData(["catRemedios"], (data: any | unknown) => {
        return [
          ...data,
          {
            id: crypto.randomUUID,
            nomeRemedio: variables.nomeRemedio,
            quantidade: variables.quantidade,
            horario: variables.horario,
            duracao: variables.duracao,
            sobre: variables.sobre,
          },
        ];
      });
    },
  });

  async function handleEditMedication(data: CreateMedicationSchema) {
    try {
      await editCatRemedioFn({
        nomeRemedio: data.nomeRemedio,
        quantidade: data.quantidade,
        horario: data.horario,
        duracao: data.duracao,
        sobre: data.sobre,
      });

     
    } catch (err) {
      alert(`Erro no cadastro do remédio`);
    }
  }

  function editCard(data?: any) {
    return (
      <Dialog>
        <DialogTrigger className="ml-4 remove_mt">
          <MdEdit  className="text-2xl text-amber-500 cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar Medicação</DialogTitle>
            <DialogDescription>Preste atenção na edição 😊</DialogDescription>
          </DialogHeader>
          <form
            onSubmit={handleSubmit(handleEditMedication)}
            className="grid gap-4 py-4"
          >
            <div className="grid md:grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="nomeRemedio">Nome</Label>
              <Input
                value={data.nomeRemedio}
                id="nomeRemedio"
                {...register("nomeRemedio")}
                className="col-span-3"
                placeholder="Tobramicina"
              />
            </div>
            <div className="grid md:grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="quantidade">
                Quantidade
              </Label>
              <Input
                {...register("quantidade")}
                id="quantidade"
                className="col-span-3"
                placeholder="1 unid"
              />
            </div>
            <div className="grid md:grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="horario">A cada</Label>
              <Input
                {...register("horario")}
                id="horario"
                className="col-span-3"
                placeholder="12h"
              />
            </div>
            <div className="grid md:grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="duracao">Tomar por</Label>
              <Input
                {...register("duracao")}
                id="duracao"
                className="col-span-3"
                placeholder="3 dias"
              />
            </div>
            <div className="grid md:grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="sobre">Descrição</Label>
              <Textarea
                {...register("sobre")}
                id="sobre"
                className="col-span-3"
                placeholder="Qual a finalidade do remédio.."
              />
            </div>
            <DialogFooter className="mt-2">
              <DialogClose asChild>
                <Button className="mt-2" type="button" variant="outline">
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
          <AlertDialogContent className="sm:w-64 md:w-full sm:max-w-auto">
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
                {editCard(data.id)}
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
