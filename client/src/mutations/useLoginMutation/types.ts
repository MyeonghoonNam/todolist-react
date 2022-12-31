import type { User } from '@queries/useUserQuery/types';

export interface AuthFormInput {
  email: string;
  password: string;
}

export interface Login {
  message: string;
  user: User;
  token: {
    refreshToken: string;
    accessToken: string;
  };
}
