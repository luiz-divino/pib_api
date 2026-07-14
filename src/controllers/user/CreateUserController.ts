import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

export class CreateUserController {
      constructor(private userService: CreateUserService) {}

      async handle(req: Request, res: Response) {
            const { name, email, password, role } = req.body;
            const user = await this.userService.execute({
                  name,
                  email,
                  role,
                  password,
            });
            res.status(201).json(user);
      }
}
