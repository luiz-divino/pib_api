import { ChurchEvent } from "../../entities/ChurchEvent";
import { IChurchRepository } from "../../interfaces/event/IChurchEventRepository";

export class MemoryEventRepository implements IChurchRepository {
      private events: ChurchEvent[] = [];

      async save(event: ChurchEvent): Promise<void> {
            this.events.push(event);
      }
      async findbyTitle(title: string): Promise<ChurchEvent[] | null> {
            const eventFound = this.events.filter(
                  (item) => item.title === title,
            );
            return eventFound ?? null;
      }
      async findbyId(id: string): Promise<ChurchEvent | null> {
            const eventFound = this.events.find((item) => item.id === id);
            return eventFound ?? null;
      }
      async findByDate(date: Date): Promise<ChurchEvent[] | null> {
            const eventFound = this.events.filter(
                  (item) => item.eventDate === date,
            );
            return eventFound ?? null;
      }

      async findBytitleAndDate(
            title: string,
            date: Date,
      ): Promise<ChurchEvent | null> {
            const event = this.events.find(
                  (item) =>
                        item.title === title &&
                        item.eventDate.getTime() === date.getTime(),
            );
            return event ?? null;
      }
}

export const memoryEventRepository = new MemoryEventRepository();
