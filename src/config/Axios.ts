import Axios from 'axios';
import Swal from 'sweetalert2';

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

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.error(error);
    Swal.fire({
      title: 'Error!',
      text: typeof error.response.data === 'string' ? error.reponse.data.message : error.message || '알 수 없는 에러!',
      icon: 'error',
      confirmButtonText: 'ok',
    });
    return Promise.reject(error);
  }
);

export default axios;
