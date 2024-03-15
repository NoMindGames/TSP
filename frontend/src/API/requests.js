const SERVER_HOST = 'localhost:8000';

const serverAPI = {
  healthCheck: SERVER_HOST + '/healthcheck'
}

function getHealthCheck() {
  return fetch(serverAPI.healthCheck)
    .then(response => {
      return response.json().then(data => {
        return data;
      })
    })
}

export {
  getHealthCheck
}
