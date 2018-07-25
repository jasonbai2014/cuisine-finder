import axios from 'axios';

const API_KEY = '489cd86e7d3b0c4f2b6e1806a4f1c396'; // TODO: will find a way to find this API key
const API_URL = 'https://developers.zomato.com/api/v2.1/';

const fetchLocations = query => axios.get(`${API_URL}cities?q=${query}`, {
  headers: {
    'user-key': API_KEY,
  },
}).then(response => response);

export default {
  fetchLocations,
};
