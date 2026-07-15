import { randomUUID } from "crypto";
import {
      FinancialRecordProps,
      FinancialRecordType,
} from "../interfaces/finance/financialEntitie";

export class FinancialRecord {
      private readonly _id: string;
      private _type: FinancialRecordType;
      private _category: string;
      private _amount: number;
      private _date: Date;
      private _description?: string;
      private _registeredBy: string;
      private _createdAt: Date;
      private constructor(props: FinancialRecordProps, id?: string) {
            if (props.amount <= 0) {
                  throw new Error(
                        "O valor do registro precisa ser maior que zero",
                  );
            }
            this._id = id ?? randomUUID();
            this._type = props.type;
            this._category = props.category;
            this._amount = props.amount;
            this._date = props.date ?? new Date();
            this._description = props.description ?? "";
            this._registeredBy = props.registeredBy;
            this._createdAt = props.createdAt;
      }

      public static create(props: FinancialRecordProps, id?: string) {
            return new FinancialRecord(props, id);
      }

      get id(): string {
            return this._id;
      }
      get type(): string {
            return this._type;
      }
      get category(): string {
            return this.category;
      }
      get amount(): number {
            return this._amount;
      }
      get date(): Date {
            return this.date;
      }
      get description(): string {
            return this.description;
      }
      get registeredBy(): string {
            return this._registeredBy;
      }

      changeCategory(newCategory: string): void {
            this._category = newCategory;
      }

      changeDate(newDate: Date): void {
            this._date = newDate;
      }
      changetypeFinancialRecord(newType: FinancialRecordType): void {
            this._type = newType;
      }

      changeDescription(newDescription: string): void {
            this._description = newDescription;
      }
}
