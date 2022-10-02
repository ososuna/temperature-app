import axios from 'axios';

const sensorApi = axios.create({
  baseURL: `${ import.meta.env.VITE_API_URI }/sensor`
});

export default sensorApi;