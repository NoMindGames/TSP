import React from 'react';
import { useDispatch } from 'react-redux';

import { AppRoutes } from '../utils/utils';
import { setPage } from '../store/page-slice';

function ConnectionLobbyPage() {
  const dispatch = useDispatch();

  return (
    <main className="main-window">
      <p className="main-title">Выбери псевдоним и идентификатор лобби</p>
      <input type="text" id="nameInput" placeholder="Member#1" />
      <input type="text" id="lobbyInput" placeholder="#123456" />
      <button className="main-btn" onClick={() => dispatch(setPage({ page: AppRoutes.LOBBY }))}>Присоединиться к лобби</button>
      <a className="cross" onClick={() => dispatch(setPage({ page: AppRoutes.INITIAL }))}>
        <img src="img/cross.svg" width={20} height={20}/>
      </a>
    </main>
  );
}

export default ConnectionLobbyPage;
