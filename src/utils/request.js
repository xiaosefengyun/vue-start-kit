import axios from 'axios';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default function request(url, options) {
  return axios.post(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

export function get(url) {
  return axios.get(url)
    .then(checkStatus)
    .then(parseJSON);
}
