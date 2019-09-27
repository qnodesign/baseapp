import React from 'react';
import { AppContextProvider } from './context';
import { ContainerContent } from './features/sidepage/content';
import { AppContainer, AppLogo, AppHeader, AppLink } from './app.styles';
// eslint-disable-next-line global-require
const logo = require('./logo.svg') as string;

const App = (): React.ReactElement => (
  <AppContextProvider>
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit &nbsp;
          <code>src/App.tsx</code>
          &nbsp; and save to reload.
        </p>
        <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          React
        </AppLink>
        <ContainerContent>My name is John!</ContainerContent>
      </AppHeader>
    </AppContainer>
  </AppContextProvider>
);

export default App;
