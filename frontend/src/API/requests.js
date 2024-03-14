const serverAPI = {
  healthCheck: 'https://catfact.ninja/fact'
}

function getHealthCheck() {
  let newData = {fact:'Ошибка', length: 'Ошибка'};
  fetch(serverAPI.healthCheck)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка при запросе к API');
      }
    })
    .then(data => {
      newData = data;
    })
  return newData;
}

export {
  getHealthCheck
}
