import { randomUUID } from "crypto";
import { UserProps, UserRoleType } from "../interfaces/user";

export class User {
      private readonly _id: string;
      private _name: string;
      private readonly _email: string;
      private _passwordHash: string;
      private _role?: UserRoleType;
      private readonly _createdAt: Date;

      private constructor(props: UserProps, id?: string) {
            this._id = id ?? randomUUID();
            this._name = props.name;
            this._email = props.email;
            this._passwordHash = props.passwordHash;
            this._role = props._role ?? "MEMBER";
            this._createdAt = props.createdAt;
      }

      public static create(props: UserProps, id?: string) {
            const role = props._role ?? "MEMBER";
            return new User({ _role: role, ...props }, id);
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
