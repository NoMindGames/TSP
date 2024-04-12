import React from 'react';

function CreateLobbyPage({goInitial, goLobby}) {
  return (
    <main className="main-window">
      <p className="main-title">Выбери псевдоним</p>
      <input type="text" id="nameInput" placeholder="Master" />
      <button className="main-btn" onClick={goLobby}>Создать лобби</button>
      <a className="cross" onClick={goInitial}>
        <img src="img/cross.svg" width={20} height={20}/>
      </a>
    </main>
  );
}

export default CreateLobbyPage;
