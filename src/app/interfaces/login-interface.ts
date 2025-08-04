export interface LoginResponse {
  result: {
    accessToken: string;
    role: 'admin' | 'user';
  };
}