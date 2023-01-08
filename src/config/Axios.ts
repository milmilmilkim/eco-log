import Axios from 'axios';

const axios = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (request) => {
    request.headers!.Authorization = (window.localStorage.getItem('token') as string) || '';

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use((response) => {
  return response;
});

export default axios;
