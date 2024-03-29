import React from 'react';

function ConnectionLobbyPage() {
  return (
    < >
      <p className="main-title">Выбери псевдоним и идентификатор лобби</p>
      <input type="text" id="nameInput" />
      <input type="text" id="lobbyInput" />
      <a className="main-btn" href="#">Присоединиться к лобби</a>
    </>
  );
}

export default ConnectionLobbyPage;
