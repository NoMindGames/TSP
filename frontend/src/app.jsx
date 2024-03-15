import React from 'react';
import { getHealthCheck } from './api/requests.js'
import Modal from './components/modal.jsx';
import './app.css';

function App() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState(null);

  const handleClose = () => setModalVisible(false);
  const handleClick = () => {
    getHealthCheck().then((data) => {
      setData(data)
      setError(!data);
      setModalVisible(true);
    });
  }
  return (
    <div className="app">
      <header className='app-header'>
        <button className='app-button' onClick={handleClick}> Health Check </button>
        {modalVisible && !error && <Modal closeModal={handleClose}>
          <h3 className='modal-caption'> Успех!</h3>
          <p className='modal-description'>Описание: {data.fact}</p>
          <p className='modal-description'>Длина: {data.length}</p>
        </Modal>}
        {modalVisible && error && <Modal closeModal={handleClose}>
          <h3 className='modal-caption modal-error'> Ошибка!</h3>
          <p className='modal-description'> Ошибка подключения к API.</p>
        </Modal>}
      </header>
    </div>
  );
}

export default App;
