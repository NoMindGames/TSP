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
  const [alerts, setAlerts] = React.useState([]);

  const addAlert = (alert) => {
    setAlerts((prev) => [...prev, alert]);
    setTimeout(() => {
      setAlerts((prev) => prev.slice(1));
    }, 1500);
  };

  const getPage = function (route) {
    switch (route) {
      case AppRoutes.INITIAL:
        return <InitialPage addAlert={addAlert} />;
      case AppRoutes.CONNECTION_LOBBY:
        return <ConnectionLobbyPage/>;
      case AppRoutes.CREATE_LOBBY:
        return <CreateLobbyPage/>;
      case AppRoutes.LOBBY:
        return <LobbyPage lobbyId={123456}/>;
    }
  };

  return (
    <>
      {getPage(page)}
      <AlertContainer>
        {alerts.map(({ text, isSuccess }, index) => (
          <Alert key={index} text={text} isSuccess={isSuccess} />))}
      </AlertContainer>
    </>
  );
}

export default App;
