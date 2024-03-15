const SERVER_HOST = 'http://127.0.0.1:8000';

const serverAPI = {
  healthCheck: `${SERVER_HOST}/healthcheck`
};

function getHealthCheck() {
  return fetch(serverAPI.healthCheck)
    .then((response) =>
      response.json().then((data) =>
        data
      )
    );
}

export {
  getHealthCheck
};
