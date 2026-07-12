import { randomUUID } from "crypto";
import { ChurchEventProps } from "../interfaces/event";

export class ChurchEvent {
      private readonly _id: string;
      private _title: string;
      private _description?: string;
      private _eventDate: Date;
      private _location: string;
      private _createdBy: string;
      private _createdAt: Date;
      private constructor(props: ChurchEventProps, id?: string) {
            this._id = id ?? randomUUID();
            this._title = props.title;
            this._description = props.description ?? "";
            this._eventDate = props.eventDate;
            this._location = props.location;
            this._createdBy = props.createdBy;
            this._createdAt = props.createdAt ?? new Date();
      }
      public static create(props: ChurchEventProps, id?: string) {
            return new ChurchEvent(props, id);
      }

      get id(): string {
            return this._id;
      }
      get title(): string {
            return this._title;
      }
      get description(): string | undefined {
            return this._description;
      }
      get eventDate(): Date {
            return this._eventDate;
      }
      get location(): string {
            return this._location;
      }
      get createBy(): string {
            return this._createdBy;
      }

      changeDescription(newDescription: string): void {
            this._description = newDescription;
      }

      changeTitle(newTitle: string): void {
            this._title = newTitle;
      }

      changeDate(newDate: Date): void {
            this._eventDate = newDate;
      }

      changeLocation(newLocation: string): void {
            this._location = newLocation;
      }
}
