import { IHashProvider } from "../../providers/hashProviders/IHashProvider";
import { IJwtToken } from "../../providers/tokenProviders/implementatios/IJwtToken";
import { ITokenProvider } from "../../providers/tokenProviders/ITokenProvider";
import { IMemoryUserRepository } from "../../repositories/user/CreateUserRepository";

export class AuthenticatedUserService {
      constructor(
            private userRepository: IMemoryUserRepository,
            private hashPassword: IHashProvider,
            private tokenProvider: ITokenProvider,
      ) {}

      async execute(email: string, password: string) {
            const user = await this.userRepository.findByEmail(email);
            if (!user) {
                  throw new Error("Email/Password incorrect.");
            }

            const passwordMatched = await this.hashPassword.compareHash(
                  password,
                  user.password,
            );

            if (!passwordMatched) {
                  throw new Error("Email/Password incorrect.");
            }

            const token = this.tokenProvider.generateToken(user.id, user.role);

            return {
                  user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                  },
                  token,
            };
      }
}
