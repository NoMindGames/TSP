const SERVER_HOST = '127.0.0.1:8040';

const serverAPI = {
  healthCheck: `http://${SERVER_HOST}/healthcheck/`
};

function getHealthCheck(successCb, errorCb, finalyCb) {
  return fetch(serverAPI.healthCheck)
    .then((response) => {
      if (response.ok) {
        return response;
      }

      const { statusText, status } = response;
      throw new Error(`${status} - ${statusText}`);
    })
    .then((response) => response.json())
    .then((data) => successCb(data))
    .catch((error) => errorCb(error.message))
    .finally(finalyCb);
}

export {
  getHealthCheck
};
