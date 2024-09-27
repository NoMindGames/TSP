import React from 'react';

function Message({name, text, isUser}) {
  return (
    <li className={isUser ? 'user-msg' : ''}>
      <p className="msg-name">{isUser ? 'you' : name}</p>
      <p className="msg-text">{text}</p>
    </li>
  );
}

export default Message;
