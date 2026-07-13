export interface ITokenProvider {
      generateToken(userId: string, role: string): string;
}
