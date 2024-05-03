import React from 'react';
import { useDispatch } from 'react-redux';

import { AppRoutes } from '../utils/utils.js';
import { setPage } from '../store/page-slice.js';
import { getHealthCheck } from '../api/requests.js';

function InitialPage({ addAlert }) {
  const dispatch = useDispatch();

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
      <button className="main-btn" onClick={() => dispatch(setPage({ page: AppRoutes.CREATE_LOBBY }))}>Создать лобби</button>
      <button className="main-btn" onClick={() => dispatch(setPage({ page: AppRoutes.CONNECTION_LOBBY }))}>Присоединиться к лобби</button>
      <button className="main-btn" onClick={healthCheck} >Health Check</button>
    </main>
  );
}

export default InitialPage;
