import React from 'react';
import InitialPage from './pages/initial-page.jsx';
import CreateLobbyPage from './pages/create-lobby.jsx';
import ConnectionLobbyPage from './pages/connection-lobby.jsx';
import { AppRoutes } from './utils/utils.js';
import { AlertContainer, Alert } from './components/alert-container.jsx';

function App() {
  const [page, setPage] = React.useState(AppRoutes.INITIAL);
  const [alerts, setAlerts] = React.useState([]);

  const goConnect = function () {
    setPage(AppRoutes.CONNECTION_LOBBY);
  };

  const goCreate = function () {
    setPage(AppRoutes.CREATE_LOBBY);
  };

  const getPage = function (route) {
    switch (route) {
      case AppRoutes.INITIAL:
        return <InitialPage goConnect={goConnect} goCreate={goCreate} setAlerts={setAlerts} />;
      case AppRoutes.CONNECTION_LOBBY:
        return <ConnectionLobbyPage />;
      case AppRoutes.CREATE_LOBBY:
        return <CreateLobbyPage />;
    }
  };

  return (
    <>
      {getPage(page)}
      <AlertContainer>
        {alerts.map(
          ({ text, isSuccess }, index) => (<Alert key={index} text={text} isSuccess={isSuccess} />))}
      </AlertContainer>
    </>
  );
}

export default App;
