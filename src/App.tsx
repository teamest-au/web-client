import React, { useState } from 'react';

import authService from './services/auth/auth.service';
import AuthContext from './global_context/auth.context';
import { useGlobalConnect } from './utilities/connect.hook';
import { IAuthState } from './services/auth/auth.types';
import LoginPage from './pages/login/LoginPage';
import BrowsePage from './pages/browse/BrowsePage';
import styled, { ThemeProvider } from 'styled-components';
import Theme from './styles/theme';
import styles from './styles/styles';
import Header from './frame/header';

const RootContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colours.mainBackground};
  color: ${(props) => props.theme.colours.mainFontColour};
  font-family: ${(props) => props.theme.typography.defaultFont};
`;

function App() {
  const authState = useGlobalConnect<IAuthState>(authService);
  const [selectedTheme, setSelectedTheme] = useState<Theme>('light');

  return (
    <ThemeProvider theme={styles(selectedTheme)}>
      <RootContainer>
        <AuthContext.Provider
          value={{
            state: authState,
            signOut: authService.handleSignOut,
          }}
        >
          <Header
            onDarkModeToggled={() =>
              setSelectedTheme((previous) =>
                previous === 'light' ? 'dark' : 'light',
              )
            }
          />
          <LoginPage />
          <BrowsePage />
        </AuthContext.Provider>
      </RootContainer>
    </ThemeProvider>
  );
}

export default App;
