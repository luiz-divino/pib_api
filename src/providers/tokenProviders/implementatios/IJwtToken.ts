import { sign } from "jsonwebtoken";
import { ITokenProvider } from "../ITokenProvider";

export class IJwtToken implements ITokenProvider {
      generateToken(userId: string, role: string): string {
            const secret = process.env.JWT_SECRET as string;
            return sign({ role }, secret, {
                  subject: userId,
                  expiresIn: "1d",
            });
      }
}
