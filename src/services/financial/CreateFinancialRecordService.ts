import { FinancialRecordType } from "../../interfaces/finance/financialEntitie";
import { FinancialRecord } from "../../entities/FinancialRecord";
import { IFinancialRecordRepository } from "../../interfaces/finance/IFinancialRecordRepository";

interface IFinancialRecordDTO {
      type: FinancialRecordType;
      category: string;
      amount: number;
      date: Date;
      description?: string;
      registeredBy: string;
}

export class CreateFinancialRecordService {
      constructor(
            private financialRecordRepository: IFinancialRecordRepository,
      ) {}

      async execute(props: IFinancialRecordDTO): Promise<FinancialRecord> {
            if (props.amount <= 0) {
                  throw new Error(
                        "O valor do registro financeiro deve ser estritamente maior que zero.",
                  );
            }
            const record = FinancialRecord.create({
                  type: props.type as FinancialRecordType,
                  category: props.category,
                  amount: props.amount,
                  date: props.date,
                  description: props.description ?? "",
                  registeredBy: props.registeredBy,
                  createdAt: new Date(),
            });

            await this.financialRecordRepository.save(record);
            return record;
      }
}
