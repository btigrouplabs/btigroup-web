declare global {
  interface IUser {
    id: number;
    uuid: string;
    name: string;
    email: string;
  }

  interface ISignInResponse {
    access_token: string;
  }

  interface ITokenPayload {
    sub: number;
    email: string;
    username?: string;
    isSecondFactorAuthenticated?: boolean;
    iat?: number;
    exp?: number;
  }
}

// This line ensures that the file is treated as a module
export {};
