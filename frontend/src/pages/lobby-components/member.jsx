import React from 'react';

function Member({isActive, name}) {
  return (
    <li className={`lobby-member ${isActive ? '' : 'member-empty'}`}>
      <img src={isActive ? 'img/question.svg' : 'img/question-empty.svg'} width={30} height={30}/>
      <p>{name}</p>
    </li>
  );
}

export default Member;
