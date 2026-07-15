import z from "zod";

export const AuthUserSchema = z.object({
      body: z.object({
            email: z.email("Email é obrigatório"),
            password: z
                  .string("A senha é obrigatória")
                  .min(6, "A senha precisa ter mais de 6 caracteres"),
      }),
});
