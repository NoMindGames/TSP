import React from 'react';
import { getHealthCheck } from './api/requests.js'
import Modal from './components/modal.jsx';
import './app.css';

function App() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [data, setData] = React.useState(null);

  const handleClose = () => setModalVisible(false);
  const handleClick = () => {
    setData(getHealthCheck());
    setModalVisible(true);
  }
  return (
    <div className="app">
      <header className='app-header'>
        <button onClick={handleClick}> Health Check </button>
        {modalVisible && <Modal closeModal={handleClose}>
          <h3 className='modal-caption'> Успех!</h3>
          <p className='modal-description'>Описание: {data.fact}</p>
          <p className='modal-description'>Длина: {data.length }</p>
        </Modal>}
      </header>
    </div>
  );
}

export default App;
