import { randomUUID } from "crypto";

export type UserRole = "MEMBER" | "FINANCE" | "ADMIN";
export interface UserProps {
      id: string;
      name: string;
      email: string;
      passwordHash: string;
      _role: UserRole;
      createdAt: Date;
}
