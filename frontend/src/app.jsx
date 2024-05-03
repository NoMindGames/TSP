import React from 'react';
import { useSelector } from 'react-redux';

import { AppRoutes } from './utils/utils.js';
import InitialPage from './pages/initial-page.jsx';
import CreateLobbyPage from './pages/create-lobby.jsx';
import ConnectionLobbyPage from './pages/connection-lobby.jsx';
import LobbyPage from './pages/lobby-page.jsx';

import { AlertContainer, Alert } from './components/alert-container.jsx';

function App() {
  const page = useSelector((state) => state.pages.page);
  const alerts = useSelector((state) => state.alerts.alerts);

  const getPage = function (route) {
    switch (route) {
      case AppRoutes.INITIAL:
        return <InitialPage/>;
      case AppRoutes.CONNECTION_LOBBY:
        return <ConnectionLobbyPage/>;
      case AppRoutes.CREATE_LOBBY:
        return <CreateLobbyPage/>;
      case AppRoutes.LOBBY:
        return <LobbyPage/>;
    }
  };

  return (
    <>
      {getPage(page)}
      <AlertContainer>
        {alerts.map(({ id, text, isSuccess }) => (
          <Alert key={id} text={text} isSuccess={isSuccess} />
        ))}
      </AlertContainer>
    </>
  );
}

export default App;
