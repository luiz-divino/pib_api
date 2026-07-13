import { Router } from "express";
import { makeCreateUserController } from "./factories/user/makeCreateUserController";
import { validateSchema } from "./middlewares/validate";
import { CreateUserSchema } from "./schema/CreateUserSchema";
import { IMemoryUserRepository } from "./repositories/user/CreateUserRepository";
const router = Router();
const Imemory = new IMemoryUserRepository();
const createUserController = makeCreateUserController();

router.post(
      "/users",
      validateSchema(CreateUserSchema),
      createUserController.handle.bind(createUserController),
);

export { router };
