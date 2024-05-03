import React from 'react';
import Message from './lobby-message.jsx';

function LobbyChat({messages, userId}) {
  return (
    <section className="lobby-chat">
      <h3 className="lobby-title">Чат</h3>
      <ul className="chat-messages">
        {messages.map(({name, text, id, msgId}) => (<Message key={msgId} name={name} text={text} isUser={id === userId}/>))}
      </ul>
      <form className="chat-input">
        <input type="text" placeholder="Сообщение"/>
        <button type="submit">
          <img src="img/send.svg" width="20px" height="20px"/>
        </button>
      </form>
    </section>);
}

export default LobbyChat;
