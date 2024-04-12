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
      <button className="main-btn" onClick={goCreate}>Создать лобби</button>
      <button className="main-btn" onClick={goConnect}>Присоединиться к лобби</button>
      <button className="main-btn" onClick={healthCheck} >Health Check</button>
    </main>
  );
}

export default InitialPage;
