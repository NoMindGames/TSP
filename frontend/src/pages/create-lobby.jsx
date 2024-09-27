import React from 'react';
import { useDispatch } from 'react-redux';

import { AppRoutes } from '../utils/utils';
import { setPage } from '../store/page-slice';

function CreateLobbyPage() {
  const dispatch = useDispatch();

  return (
    <main className="main-window">
      <p className="main-title">Выбери псевдоним</p>
      <input type="text" id="nameInput" placeholder="Master" />
      <button className="main-btn" onClick={() => dispatch(setPage({ page: AppRoutes.LOBBY }))}>Создать лобби</button>
      <a className="cross" onClick={() => dispatch(setPage({ page: AppRoutes.INITIAL }))}>
        <img src="img/cross.svg" width={20} height={20}/>
      </a>
    </main>
  );
}

export default CreateLobbyPage;
