import React from 'react';

function ConnectionLobbyPage({goInitial, goLobby}) {
  return (
    <main className="main-window">
      <p className="main-title">Выбери псевдоним и идентификатор лобби</p>
      <input type="text" id="nameInput" placeholder="Member#1" />
      <input type="text" id="lobbyInput" placeholder="#123456" />
      <button className="main-btn" onClick={goLobby}>Присоединиться к лобби</button>
      <a className="cross" onClick={goInitial}>
        <img src="img/cross.svg" width={20} height={20}/>
      </a>
    </main>
  );
}

export default ConnectionLobbyPage;
