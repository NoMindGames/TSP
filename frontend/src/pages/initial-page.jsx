import React from 'react';
import { getHealthCheck } from '../api/requests.js';

function InitialPage({ goCreate, goConnect, addAlert }) {
  const healthCheck = function () {
    getHealthCheck(
      (data) => {
        addAlert({ text: `Успех! Статус: ${data.status}, версия backend: ${data.backend_version}`, isSuccess: true });
      }, () => {
        addAlert({ text: 'Ошибка подключения к серверу', isSuccess: false });
      }, () => { }
    );
  };
  return (
    <main className="main-window">
      <a className="main-btn" href="#" onClick={goCreate}>Создать лобби</a>
      <a className="main-btn" href="#" onClick={goConnect}>Присоединиться к лобби</a>
      <a className="main-btn" href="#" onClick={healthCheck} >Health Check</a>
    </main>
  );
}

export default InitialPage;
