import React from 'react';
import Cross from '../img/cross.svg';

function CreateLobbyPage({goInitial}) {
  return (
    <main className="main-window">
      <p className="main-title">Выбери псевдоним</p>
      <input type="text" id="nameInput" placeholder="Master" />
      <a className="main-btn" href="#">Создать лобби</a>
      <a className="cross" href="#" onClick={goInitial}>
        <Cross width={20} height={20}/>
      </a>
    </main>
  );
}

export default CreateLobbyPage;
