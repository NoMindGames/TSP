import React from 'react';
import Cross from '../img/cross.svg';

function ConnectionLobbyPage({goInitial}) {
  return (
    <main className="main-window">
      <p className="main-title">Выбери псевдоним и идентификатор лобби</p>
      <input type="text" id="nameInput" placeholder="Member#1" />
      <input type="text" id="lobbyInput" placeholder="#123456" />
      <a className="main-btn" href="#">Присоединиться к лобби</a>
      <a className="cross" href="#" onClick={goInitial}>
        <Cross width={20} height={20}/>
      </a>
    </main>
  );
}

export default ConnectionLobbyPage;
