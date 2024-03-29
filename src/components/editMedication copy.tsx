import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MdEdit } from "react-icons/md";
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

export function EditMedicationDialog() {
  const { register, handleSubmit } = useForm<CreateMedicationSchema>({
    resolver: zodResolver(createMedicationSchema),
  });

  function handleCreateMedication(data: CreateMedicationSchema) {
    console.log(data);
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
            Alterar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
