import { AuthUserController } from "../../controllers/user/AuthUserController";
import { BcryptHashProvider } from "../../providers/hashProviders/implementatios/BcryptHashProvider";
import { IJwtToken } from "../../providers/tokenProviders/implementatios/IJwtToken";
import { memoryUserRepository } from "../../repositories/user/CreateUserRepository";
import { AuthenticatedUserService } from "../../services/user/AuthenticateUserService";

export function makeAuthUserController(): AuthUserController {
      const hash = new BcryptHashProvider();
      const token = new IJwtToken();
      const service = new AuthenticatedUserService(
            memoryUserRepository,
            hash,
            token,
      );
      const controller = new AuthUserController(service);
      return controller;
}
