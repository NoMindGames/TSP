import React from 'react';
import { useDispatch } from 'react-redux';

import { AppRoutes } from '../utils/utils.js';
import { setPage } from '../store/page-slice.js';
import { getHealthCheck } from '../api/requests.js';
import { addAlert } from '../store/alert-slice.js';

function InitialPage() {
  const dispatch = useDispatch();

  const healthCheck = function () {
    getHealthCheck(
      (data) => {
        dispatch(addAlert({ text: `Успех! Статус: ${data.status}, версия backend: ${data.backend_version}`, isSuccess: true }));
      }, () => {
        dispatch(addAlert({ text: 'Ошибка подключения к серверу', isSuccess: false }));
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
