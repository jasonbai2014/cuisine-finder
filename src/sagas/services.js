import axios from 'axios';

const API_KEY = '489cd86e7d3b0c4f2b6e1806a4f1c396'; // TODO: will find a way to find this API key
const API_URL = 'https://developers.zomato.com/api/v2.1/';

const fetchLocations = (
  cancelToken,
  query = '',
  lat = '',
  lon = '',
) => axios.get(`${API_URL}cities?q=${query}&lat=${lat}&lon=${lon}`, {
  headers: {
    'user-key': API_KEY,
  },
  cancelToken,
}).then(response => response)
  .catch((thrown) => {
    if (axios.isCancel(thrown)) {
      if (process.env.NODE_ENV === 'development') console.log(thrown.message);
    }
  });

const fetchLocationEntity = city => axios.get(`${API_URL}locations?query=${city}`, {
  headers: {
    'user-key': API_KEY,
  },
}).then(response => response);

const fetchLocationDetail = (id, type) => axios.get(`${API_URL}location_details?entity_id=${id}&entity_type=${type}`, {
  headers: {
    'user-key': API_KEY,
  },
}).then(response => response);

export default {
  fetchLocations,
  fetchLocationEntity,
  fetchLocationDetail,
};
