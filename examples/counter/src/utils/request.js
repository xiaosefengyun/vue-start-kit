import axios from 'axios';

function parseJSON(response) {
  return response.json();
}

export default function request(url, options) {
  return axios.post(url, options)
    .then(parseJSON);
}

export function get(url) {
  return axios.get(url)
    .then(parseJSON);
}
