import Instance from './Axios';
import Swal from 'sweetalert2';

import useLogin from '../Hooks/useLogin';

const errorAlert = (message: string) => {
  Swal.fire({
    title: 'Error!',
    text: message,
    icon: 'error',
    confirmButtonText: 'ok',
  });
};

const useAxios = () => {
  const axios = Instance;
  const { logout } = useLogin();

  const responseHandler = (response: any) => {
    return response;
  };

  const errorHandler = async (err: any) => {
    const code = err.response?.status || err.response?.data.status;
    let message;

    if (code === 401) {
      errorAlert('토큰이 만료되었습니다. 다시 로그인해 주세요.');
      logout();
    } else if (code === 500) {
      message = '서버 내부 오류';
      errorAlert(message);
    } else {
      message = err?.response?.data.message || err.message;
      errorAlert(message);
    }

    return Promise.reject(err);
  };

  axios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
  );

  return axios;
};

export default useAxios;
