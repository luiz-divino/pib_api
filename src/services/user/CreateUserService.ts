import { User } from "../../entities/User";
import { UserRoleType } from "../../interfaces/user/userEntitie";
import { BcryptHashProvider } from "../../providers/hashProviders/implementatios/BcryptHashProvider";
import { IMemoryUserRepository } from "../../repositories/user/CreateUserRepository";

interface UserDto {
      name: string;
      email: string;
      password: string;
      role?: UserRoleType;
}

type CreateUserResponse = {
      id: string;
      name: string;
      email: string;
      role: string;
};

export class CreateUserService {
      constructor(
            private userRepository: IMemoryUserRepository,
            private hashProvider: BcryptHashProvider,
      ) {}

      async execute(props: UserDto): Promise<CreateUserResponse> {
            const userAlReadyExists = await this.userRepository.findByEmail(
                  props.email,
            );
            if (userAlReadyExists) {
                  throw new Error("Este Email já está cadastrado no sistema");
            }

            const passwordHashed = await this.hashProvider.generateHash(
                  props.password,
            );
            const user = User.create({
                  name: props.name,
                  email: props.email,
                  password: passwordHashed,
                  role: props.role as UserRoleType,
            });

            await this.userRepository.save(user);
            return {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  role: user.role,
            };
      }
}
