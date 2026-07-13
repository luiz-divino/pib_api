import { z } from "zod";
export const CreateUserSchema = z.object({
      body: z.object({
            name: z.string("Nome obrigatório"),
            email: z.email("Email é obrigatório"),
            password: z
                  .string("A senha é obrigatória")
                  .min(6, "A senha precisa ter mais de 6 caracteres"),
            role: z.enum(["MEMBER", "FINANCE", "ADMIN"]),
      }),
});
