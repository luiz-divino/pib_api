import { Request, Response } from "express";
import { CreateFinancialRecordService } from "../../services/financial/CreateFinancialRecordService";

export class CreateFinancialRecordController {
      constructor(private financialRecord: CreateFinancialRecordService) {}

      async handle(req: Request, res: Response) {
            const { type, category, amount, date, description } = req.body;
            const registeredBy = req.user.id
            const record = await this.financialRecord.execute({
                  type,
                  category,
                  amount,
                  date: new Date(date),
                  description,
                  registeredBy,
            });

            return res.status(201).json(record);
      }
}
