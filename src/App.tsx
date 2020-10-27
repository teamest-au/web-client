import React, { useContext } from 'react';
import styled from 'styled-components';
import './App.css';

import authService from './services/auth.service';
import AuthContext from './services/auth.context';
import { useConnect } from './utilities/connect.hook';
import { defaultAuthState, IAuthState } from './services/auth.types';

const AuthTest = () => {
  const { state, signOut } = useContext(AuthContext);
  return (
    <>
      <div>{state.state}</div>
      {state.user && (
        <div>
          {state.user.name}
          <br />
          {state.user.email}
          {state.user.imageUrl && (
            <img src={state.user.imageUrl} alt='profile' />
          )}
        </div>
      )}
      <div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </>
  );
};

const GoogleAuthButton = styled.div`
  display: inline-block;
`;

function App() {
  const authState = useConnect<IAuthState, never>(
    () => authService.getAuthStateObservable(),
    defaultAuthState,
  );

  return (
    <AuthContext.Provider
      value={{
        state: authState,
        signOut: authService.handleSignOut,
      }}
    >
      <div className='App'>
        <GoogleAuthButton
          className='g-signin2'
          data-onsuccess='onSignIn'
        ></GoogleAuthButton>
        <AuthTest />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
