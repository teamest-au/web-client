import { createContext } from 'react';
import { defaultAuthState, IAuthState } from '../services/auth/auth.types';

export interface IAuthContextValue {
  signOut: () => void;
  state: IAuthState;
}

const AuthContext = createContext<IAuthContextValue>({
  signOut: function () {},
  state: defaultAuthState,
});

export default AuthContext;
