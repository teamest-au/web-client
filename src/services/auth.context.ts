import { createContext } from 'react';
import { defaultAuthState, IAuthState } from './auth.types';

export interface IAuthContextValue {
  signOut: () => void;
  state: IAuthState;
}

const AuthContext = createContext<IAuthContextValue>({
  signOut: function () {},
  state: defaultAuthState,
});

export default AuthContext;
