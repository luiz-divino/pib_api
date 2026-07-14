import { CreateFinancialRecordController } from "../../controllers/financial/CreateFinancialRecordController";
import { memoryFinancialRepository } from "../../repositories/financial/CreateFinancialRecordRepository";
import { CreateFinancialRecordService } from "../../services/financial/CreateFinancialRecordService";

export function makeCreateFinancialRecord(): CreateFinancialRecordController {
      const service = new CreateFinancialRecordService(
            memoryFinancialRepository,
      );
      const controller = new CreateFinancialRecordController(service);
      return controller;
}
