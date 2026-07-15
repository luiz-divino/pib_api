import z from "zod";

export const createChurchEventSchema = z.object({
      title: z.string({ error: "Titulo do evento é obrigatório." }),
      description: z.string().optional(),
      eventDate: z.coerce.date({
            error: "Data do evento é inválida",
      }),
      location: z
            .string({ error: "Local do evento é obrigatório." })
            .min(3, "O local deve ter no mínimo 3 caracteres."),
});
// Inferimos a tipagem do Zod para usar no Service! Isso evita duplicar código e o service recebe os mesmos campos que devem ser entregues pelo usuario
export type CreateChurchEventDTO = z.infer<typeof createChurchEventSchema> & {
      createdBy: string;
};
