import React from 'react';
import Members from './lobby-components/members.jsx';
import LobbyChat from './lobby-components/lobby-chat.jsx';

function LobbyPage({goInitial, lobbyId}) {
  const messages = new Array(10);
  const names = ['Master', 'Member#1', 'Member#2'];

  for (let i = 0; i < messages.length; i++) {
    messages[i] = {'id': i % 3, 'msgId': i, 'name': names[i % 3], 'text': 'Привет'};
  }

  return (
    <main className="lobby">
      <section className="lobby-header">
        <button className="lobby-btn lobby-exit" onClick={goInitial}>Выйти</button>
        <h2 className="lobby-title">{`lobby#${lobbyId}`}</h2>
        <button className="lobby-btn">Готов</button>
      </section>
      <Members members={[{'id': 1, 'name':'Master'}, {'id': 2, 'name':'Member#1'}]}/>
      <section className="lobby-content"></section>
      <LobbyChat messages={messages} userId={0}/>
    </main>
  );
}

export default LobbyPage;
