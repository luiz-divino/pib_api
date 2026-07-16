import { randomUUID } from "crypto";
import { UserProps, UserRoleType } from "../interfaces/user/userEntitie";

export class User {
      private readonly _id: string;
      private _name: string;
      private readonly _email: string;
      private _password: string;
      private _role?: UserRoleType;

      private constructor(props: UserProps, id?: string) {
            this._id = id ?? randomUUID();
            this._name = props.name;
            this._email = props.email;
            this._password = props.password;
            this._role = props.role ?? "MEMBER";
      }

      public static create(props: UserProps, id?: string) {
            const role = props.role ?? "MEMBER";
            return new User({ role, ...props }, id);
      }

      get id(): string {
            return this._id;
      }

      get name(): string {
            return this._name;
      }
      get role(): string {
            return this._role ?? "MEMBER";
      }

      get email(): string {
            return this._email;
      }

      get password(): string {
            return this._password;
      }

      changeRole(newRole: UserRoleType): void {
            if (
                  newRole === "ADMIN" ||
                  newRole === "FINANCE" ||
                  newRole === "MEMBER"
            ) {
                  this._role = newRole;
            } else {
                  throw new Error("Cargo inválido.");
            }
      }
}
