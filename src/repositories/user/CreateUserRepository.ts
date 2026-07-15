import { User } from "../../entities/User";
import { IUserRepository } from "../../interfaces/user/IUserRepository";

export class IMemoryUserRepository implements IUserRepository {
      private users: User[] = [];
      async save(user: User): Promise<void> {
            this.users.push(user);
      }
      async findByEmail(email: string): Promise<User | null> {
            const user = this.users.find((users) => users.email === email);
            return user ?? null;
      }
      async findById(id: string): Promise<User | null> {
            const user = this.users.find((user) => user.id === id);
            return user ?? null;
      }
}

export const memoryUserRepository = new IMemoryUserRepository();
