import { FinancialRecord } from "../../entities/FinancialRecord";
import { FinancialRecordType } from "./financialEntitie";

export interface IFinancialRecordRepository {
      save(record: FinancialRecord): Promise<void>;
      findById(id: string): Promise<FinancialRecord | null>;

      // 3. Buscas para Relatórios e Dashboards
      // Buscar tudo de um mês específico (Ex: do dia 01/10 ao 31/10)
      findByPeriod(startDate: Date, endDate: Date): Promise<FinancialRecord[]>;

      // Buscar apenas Entradas (Dízimos/Ofertas) ou apenas Saídas (Despesas)
      findByType(type: FinancialRecordType): Promise<FinancialRecord[]>;

      // Buscar por categoria (Ex: "Conta de Luz", "Missões") dentro de um período
      findByPeriodAndCategory(
            category: string,
            startDate: Date,
            endDate: Date,
      ): Promise<FinancialRecord[]>;
}
