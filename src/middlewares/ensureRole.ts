import { NextFunction, Request, Response } from "express";

export function ensureRole(req: Request, res: Response, next: NextFunction) {
      const { role } = req.user;
      if (role === "MEMBER") {
            throw new Error(
                  // 403 Forbidden: O usuário até está logado, mas não tem permissão para isso.
                  "Acesse negado. Apenas membros autorizados podem realizar essa ação.",
            );
      }
      return next();
}
