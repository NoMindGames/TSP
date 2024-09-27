import React from 'react';
import Member from './member.jsx';

function Members({members}) {
  const empty = new Array(10 - members.length).fill(0);

  return (
    <section className="lobby-members">
      <h3 className="lobby-title"><span>Участники</span> 2/10</h3>
      <ul className="lobby-members-list">
        {members.map(({id, name}) => (<Member key={id} isActive name={name}/>))}
        {empty.map((val, index) => (<Member key={-index} name={'Empty'}/>))}
      </ul>
    </section>
  );
}

export default Members;
