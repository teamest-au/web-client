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
import Header from './frame/header/Header';
import Navigation from './frame/navigation/Navigation';
import MatchesPage from './pages/matches/MatchesPage';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

const RootContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colours.mainBackground};
  color: ${(props) => props.theme.colours.mainFontColour};
  font-family: ${(props) => props.theme.typography.defaultFont};
`;

const ContentContainer = styled.div`
  margin: auto;
  margin-top: 2rem;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
`;

function App() {
  const authState = useGlobalConnect<IAuthState>(authService);
  const [selectedTheme, setSelectedTheme] = useState<Theme>('light');

  const history = useHistory();

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
            currentTheme={selectedTheme}
            onThemeChanged={(theme) => setSelectedTheme(theme)}
          />
          <Navigation onNavigate={(path) => history.push(path)} />
          <ContentContainer>
            {(authState.state === 'unauthenticated' ||
              authState.state === 'loading') && <LoginPage />}
            {authState.state === 'authenticated' && (
              <>
                <Switch>
                  <Route path='/browse'>
                    <BrowsePage />
                  </Route>
                  <Route path='/matches'>
                    <MatchesPage />
                  </Route>
                </Switch>
              </>
            )}
          </ContentContainer>
        </AuthContext.Provider>
      </RootContainer>
    </ThemeProvider>
  );
}

export default App;
