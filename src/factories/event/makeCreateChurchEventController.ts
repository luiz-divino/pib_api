import { CreateChurchEventController } from "../../controllers/event/CreateChurchEventController";
import { memoryEventRepository } from "../../repositories/event/CreateChurchRepository";
import { CreateChurchEventService } from "../../services/event/CreateChurchEventServices";

export function makeCreateChurchEventController(): CreateChurchEventController {
      const service = new CreateChurchEventService(memoryEventRepository);
      const controller = new CreateChurchEventController(service);
      return controller;
}
