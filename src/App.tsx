import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { TmdbProvider } from './hooks/tmdb';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <TmdbProvider>
      <Routes />
    </TmdbProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
