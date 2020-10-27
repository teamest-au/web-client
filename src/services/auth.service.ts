import { Observable, BehaviorSubject } from 'rxjs';
import { defaultAuthState, IAuthState, IAuthUser } from './auth.types';
import { v4 as uuidv4 } from 'uuid';

export class AuthService {
  private authSubject$ = new BehaviorSubject<IAuthState>({
    state: 'unauthenticated',
    user: undefined,
  });
  private signOutActions: {
    handle: string;
    handler: () => Promise<void>;
  }[] = [];

  constructor() {
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignIn(user: IAuthUser) {
    this.authSubject$.next({
      state: 'authenticated',
      user,
    });
  }

  async handleSignOut() {
    this.authSubject$.next({ ...defaultAuthState, state: 'loading' });
    await Promise.all(this.signOutActions.map((action) => action.handler()));
    this.authSubject$.next(defaultAuthState);
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

  getAuthStateObservable(): Observable<IAuthState> {
    return this.authSubject$;
  }
}

const instance = new AuthService();
export default instance;
