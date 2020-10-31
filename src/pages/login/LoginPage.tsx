import React, { useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../../global_context/auth.context';

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

export default function LoginPage() {
  return (
    <div className='App'>
      <GoogleAuthButton
        className='g-signin2'
        data-onsuccess='onSignIn'
      ></GoogleAuthButton>
      <AuthTest />
    </div>
  );
}
