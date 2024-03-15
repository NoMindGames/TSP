const serverAPI = {
  healthCheck: 'https://catfact.ninja/fact'
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
