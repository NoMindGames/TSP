import React from 'react';

function AlertContainer({ children }) {
  return (
    <div className="alert-container">
      {children}
    </div>
  );
}

function Alert({text, isSuccess}) {
  return <div className={`alert ${isSuccess ? 'success' : 'warning'}`}>{text}</div>;
}

export {AlertContainer, Alert};
