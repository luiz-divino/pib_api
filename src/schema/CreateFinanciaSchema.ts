import z from "zod";

export const CreateFinancialSchema = z.object({
      body: z.object({
            type: z.enum(
                  ["INCOME", "EXPENSE"],
                  "Tipo de registro é obrigatório",
            ),
            category: z
                  .string("Categoria é obrigatória")
                  .min(2, "Categoria deve ter mais de 2 caracteres"),
            amount: z.number("Valor do registro é obrigatório"),
            date: z.string("Data do registro é obrigatorio"),
      }),
});

export type CreateFinancialRecordDTO = z.infer<typeof CreateFinancialSchema> & {
      registeredby: string;
};
