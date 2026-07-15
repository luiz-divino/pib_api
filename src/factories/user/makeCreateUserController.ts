import { CreateUserController } from "../../controllers/user/CreateUserController";
import { BcryptHashProvider } from "../../providers/hashProviders/implementatios/BcryptHashProvider";
import { memoryUserRepository } from "../../repositories/user/CreateUserRepository";
import { CreateUserService } from "../../services/user/CreateUserService";

export function makeCreateUserController(): CreateUserController {
      const hashpassword = new BcryptHashProvider();
      const service = new CreateUserService(memoryUserRepository, hashpassword);
      const controller = new CreateUserController(service);
      return controller;
}
