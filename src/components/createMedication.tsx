import { createCatRemedio } from "@/assets/data/remedios";
import { queryClient } from "@/lib/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle
} from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { useMutation } from "@tanstack/react-query";
import { register } from "module";
import { useForm } from "react-hook-form";
import { MdEdit } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { z } from "zod";
import { Button } from "./ui/button";
import { DialogFooter, DialogHeader } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

//falta o id para criacao no banco
const createMedicationSchema = z.object({
  nomeRemedio: z.string(),
  quantidade: z.string(),
  horario: z.string(),
  duracao: z.string(),
  sobre: z.string(),
});

type CreateMedicationSchema = z.infer<typeof createMedicationSchema>;

export function CreateMedicationDialog() {
  const { register, handleSubmit } = useForm<CreateMedicationSchema>({
    resolver: zodResolver(createMedicationSchema),
  });

  const { mutateAsync: createCatRemedioFn } = useMutation({
    mutationFn: createCatRemedio,
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

  async function handleCreateMedication(data: CreateMedicationSchema) {
    try {
      await createCatRemedioFn({
        nomeRemedio: data.nomeRemedio,
        quantidade: data.quantidade,
        horario: data.horario,
        duracao: data.duracao,
        sobre: data.sobre,
      });

      alert(`Remédio cadastro com sucesso!`);
    } catch (err) {
      alert(`Erro no cadastro do remédio`);
    }
  }

  return (
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
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
