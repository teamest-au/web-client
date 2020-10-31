import { defaultAuthState, IAuthState, IAuthUser } from './auth.types';
import { v4 as uuidv4 } from 'uuid';
import { GlobalBaseService } from '../global.base.service';

export class AuthService extends GlobalBaseService<IAuthState> {
  private signOutActions: {
    handle: string;
    handler: () => Promise<void>;
  }[] = [];

  constructor() {
    super({
      state: 'unauthenticated',
      user: undefined,
    });
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignIn(user: IAuthUser) {
    this.updateValue({
      state: 'authenticated',
      user,
    });
  }

  async handleSignOut() {
    this.updateValue({ ...defaultAuthState, state: 'loading' });
    await Promise.all(this.signOutActions.map((action) => action.handler()));
    this.updateValue(defaultAuthState);
  }

  addSignOutAction(handler: () => Promise<void>) {
    const handle = uuidv4();
    this.signOutActions = [
      ...this.signOutActions,
      {
        handle,
        handler,
      },
    ];
    return handle;
  }

  removeSignOutAction(handle: string) {
    this.signOutActions = this.signOutActions.filter(
      (handler) => handler.handle !== handle,
    );
  }
}

const instance = new AuthService();
export default instance;
