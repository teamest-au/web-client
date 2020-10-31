export type AuthType = 'google';

export interface IAuthUser {
  email: string;
  name: string;
  imageUrl?: string;
  token: string;
  type: AuthType;
}

export interface IAuthState {
  state: 'loading' | 'authenticated' | 'unauthenticated';
  user?: IAuthUser;
}

export const defaultAuthState: IAuthState = {
  state: 'unauthenticated',
};
