import { Router } from "express";
import { makeCreateUserController } from "./factories/user/makeCreateUserController";
import { validateSchema } from "./middlewares/validate";
import { CreateUserSchema } from "./schema/CreateUserSchema";
import { IMemoryUserRepository } from "./repositories/user/CreateUserRepository";
import { makeAuthUserController } from "./factories/user/makeAuthUserController";
import { AuthUserSchema } from "./schema/AuthUserSchema";
import { ensuredAuthenticated } from "./middlewares/ensureAuthenticated";
import { makeCreateFinancialRecord } from "./factories/financial/makeCreateFinancialRecordController";
import { CreateFinancialSchema } from "./schema/CreateFinanciaSchema";
const router = Router();
const Imemory = new IMemoryUserRepository();
const createUserController = makeCreateUserController();
const authUserController = makeAuthUserController();
const createFinancialController = makeCreateFinancialRecord();

router.post(
      "/users",
      validateSchema(CreateUserSchema),
      createUserController.handle.bind(createUserController),
);

router.post(
      "/session",
      validateSchema(AuthUserSchema),
      authUserController.handle.bind(authUserController),
);

router.post(
      "/financial/records",
      ensuredAuthenticated,
      validateSchema(CreateFinancialSchema),
      createFinancialController.handle.bind(createFinancialController),
);

export { router };
