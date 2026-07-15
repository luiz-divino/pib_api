import { FinancialRecord } from "../../entities/FinancialRecord";
import { IFinancialRecordRepository } from "../../interfaces/finance/IFinancialRecordRepository";
import { FinancialRecordType } from "../../interfaces/finance/financialEntitie";

export class MemoryFinancialRecordRepository implements IFinancialRecordRepository {
      private records: FinancialRecord[] = [];

      public async save(record: FinancialRecord): Promise<void> {
            this.records.push(record);
      }
      async findById(id: string): Promise<FinancialRecord | null> {
            const record = this.records.find((record) => record.id === id);
            return record ?? null;
      }
      async findByPeriod(
            startDate: Date,
            endDate: Date,
      ): Promise<FinancialRecord[]> {
            return this.records.filter((period) => {
                  period.date >= startDate && period.date <= endDate;
            });
      }

      async findByType(type: FinancialRecordType): Promise<FinancialRecord[]> {
            return this.records.filter((item) => {
                  item.type === type;
            });
      }

      async findByPeriodAndCategory(
            category: string,
            startDate: Date,
            endDate: Date,
      ): Promise<FinancialRecord[]> {
            return this.records.filter((item) => {
                  item.category === category &&
                        item.date >= startDate &&
                        item.date <= endDate;
            });
      }
}

export const memoryFinancialRepository = new MemoryFinancialRecordRepository();
