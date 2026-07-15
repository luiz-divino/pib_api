import { Request, Response } from "express";
import { CreateChurchEventService } from "../../services/event/CreateChurchEventServices";
import { createChurchEventSchema } from "../../schema/CreateEventSchema";

export class CreateChurchEventController {
      constructor(private churchEventService: CreateChurchEventService) {}
      async handle(req: Request, res: Response) {
            const validatedData = createChurchEventSchema.parse(req.body);
            const createdBy = req.user.id;
            const event = await this.churchEventService.execute({
                  ...validatedData,
                  createdBy,
            });
            return res.status(201).json(event);
      }
}
