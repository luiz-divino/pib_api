import { ChurchEvent } from "../../entities/ChurchEvent";
import { IChurchRepository } from "../../interfaces/event/IChurchEventRepository";
import { CreateChurchEventDTO } from "../../schema/CreateEventSchema";

export class CreateChurchEventService {
      constructor(private churchRepository: IChurchRepository) {}

      async execute(request: CreateChurchEventDTO): Promise<ChurchEvent> {
            const now = new Date();
            if (request.eventDate.getTime() < now.getTime()) {
                  throw new Error(
                        "Não é possivel agendar um evento para uma data que já passou.",
                  );
            }

            const eventAlreadyExists =
                  await this.churchRepository.findByTitleAndDate(
                        request.title,
                        request.eventDate,
                  );
            if (eventAlreadyExists) {
                  throw new Error(
                        "Já existe um evento com esse nome agendado para esse horário.",
                  );
            }
            const event = ChurchEvent.create({
                  title: request.title,
                  description: request.description ?? "",
                  eventDate: request.eventDate,
                  location: request.location,
                  createdBy: request.createdBy,
                  createdAt: new Date(),
            });
            await this.churchRepository.save(event);

            return event;
      }
}
