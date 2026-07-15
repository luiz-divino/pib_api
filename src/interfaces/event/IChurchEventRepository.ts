import { ChurchEvent } from "../../entities/ChurchEvent";

export interface IChurchRepository {
      save(event: ChurchEvent): Promise<void>;
      findById(id: string): Promise<ChurchEvent | null>;
      findByTitle(title: string): Promise<ChurchEvent[]>;
      findByDate(date: Date): Promise<ChurchEvent[]>;
      findByTitleAndDate(
            title: string,
            date: Date,
      ): Promise<ChurchEvent | null>;
}
