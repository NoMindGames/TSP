import React from 'react';
import { getHealthCheck } from '../api/requests.js';

function InitialPage({ goCreate, goConnect, setAlerts }) {
  const healthCheck = function () {
    getHealthCheck(
      (data) => {
        setAlerts([{ text: `Успех! Статус: ${data.status}, версия backend: ${data.backend_version}`, isSuccess: true }]);
      }, () => {
        setAlerts([{ text: 'Ошибка подключения к серверу', isSuccess: false }]);
      }, () => { }
    );
  };
  return (
    < >
      <a className="main-btn" href="#" onClick={goCreate}>Создать лобби</a>
      <a className="main-btn" href="#" onClick={goConnect}>Присоединиться к лобби</a>
      <a className="main-btn" href="#" onClick={healthCheck} >Health Check</a>
    </>
  );
}

export default InitialPage;
