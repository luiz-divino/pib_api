import { randomUUID } from "crypto";

export type UserRoleType = "MEMBER" | "FINANCE" | "ADMIN";
export interface UserProps {
      id: string;
      name: string;
      email: string;
      passwordHash: string;
      _role?: UserRoleType;
      createdAt: Date;
}
