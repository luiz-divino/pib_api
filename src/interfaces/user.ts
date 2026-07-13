import { randomUUID } from "crypto";

export type UserRoleType = "MEMBER" | "FINANCE" | "ADMIN";
export interface UserProps {
      name: string;
      email: string;
      passwordHash: string;
      _role?: UserRoleType;
}
