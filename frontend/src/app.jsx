import React from 'react';
import InitialPage from './pages/initial-page.jsx';
import CreateLobbyPage from './pages/create-lobby.jsx';
import ConnectionLobbyPage from './pages/connection-lobby.jsx';
import { AppRoutes } from './utils/utils.js';
import { AlertContainer, Alert } from './components/alert-container.jsx';

function App() {
  const [page, setPage] = React.useState(AppRoutes.INITIAL);
  const [alerts, setAlerts] = React.useState([]);

  const goConnect = function (evt) {
    evt.preventDefault();
    setPage(AppRoutes.CONNECTION_LOBBY);
  };

  const goCreate = function (evt) {
    evt.preventDefault();
    setPage(AppRoutes.CREATE_LOBBY);
  };

  const goInitial = function (evt) {
    evt.preventDefault();
    setPage(AppRoutes.INITIAL);
  };

  const addAlert = (alert) => {
    setAlerts((prev) => [...prev, alert]);
    setTimeout(() => {
      setAlerts((prev) => prev.slice(1));
    }, 1500);
  };

  const getPage = function (route) {
    switch (route) {
      case AppRoutes.INITIAL:
        return <InitialPage goConnect={goConnect} goCreate={goCreate} addAlert={addAlert} />;
      case AppRoutes.CONNECTION_LOBBY:
        return <ConnectionLobbyPage goInitial={goInitial}/>;
      case AppRoutes.CREATE_LOBBY:
        return <CreateLobbyPage goInitial={goInitial}/>;
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
