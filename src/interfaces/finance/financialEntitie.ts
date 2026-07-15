export type FinancialRecordType = "INCOME" | "EXPENSE";

export interface FinancialRecordProps {
      type: FinancialRecordType;
      category: string;
      amount: number;
      date: Date;
      description?: string;
      registeredBy: string;
      createdAt: Date;
}
