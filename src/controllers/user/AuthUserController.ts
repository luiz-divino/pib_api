import { Request, Response } from "express";
import { AuthenticatedUserService } from "../../services/user/AuthenticateUserService";

export class AuthUserController {
      constructor(private authUser: AuthenticatedUserService) {}

      async handle(req: Request, res: Response) {
            const { email, password } = req.body;
            const response = await this.authUser.execute( email, password );
            return res.status(200).json(response);
      }
}
