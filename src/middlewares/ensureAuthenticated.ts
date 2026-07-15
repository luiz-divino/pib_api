import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
      sub: string;
      role: string;
}
export function ensuredAuthenticated(
      req: Request,
      res: Response,
      next: NextFunction,
) {
      const { authorization } = req.headers;

      if (!authorization) {
            throw new Error("JWT token is missing");
      }

      const [_, token] = authorization.split(" ");

      try {
            const secret = process.env.JWT_SECRET as string;
            const decoded = verify(token as string, secret) as Payload;

            req.user = {
                  id: decoded.sub,
                  role: decoded.role,
            };

            return next();
      } catch {
            throw new Error("Invalid JWT token");
      }
}
