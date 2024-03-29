import React from 'react';
import InitialPage from './pages/initial-page.jsx';
import CreateLobbyPage from './pages/create-lobby.jsx';
import ConnectionLobbyPage from './pages/connection-lobby.jsx';
import { AppRoutes } from './utils/utils.js';
import { AlertContainer, Alert } from './components/alert-container.jsx';

function App() {
  const [page, setPage] = React.useState(AppRoutes.INITIAL);
  const [alerts, setAlerts] = React.useState([]);
  const [alertId, setAlertId] = React.useState(0);

  const goConnect = function () {
    setPage(AppRoutes.CONNECTION_LOBBY);
  };

  const goCreate = function () {
    setPage(AppRoutes.CREATE_LOBBY);
  };

  const addAlert = (alert) => {
    setAlerts((prev) => [...prev, {id: alertId, ...alert}]);
    setAlertId((prev) => prev + 1);
    setTimeout(() => {
      setAlerts((prev) => prev.slice(1));
    }, 1500);
  };

  const getPage = function (route) {
    switch (route) {
      case AppRoutes.INITIAL:
        return <InitialPage goConnect={goConnect} goCreate={goCreate} addAlert={addAlert} />;
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
        {alerts.map(({ id, text, isSuccess }) => (<Alert key={id} text={text} isSuccess={isSuccess} />))}
      </AlertContainer>
    </>
  );
}

export default App;
