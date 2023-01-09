// @ts-ignore
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const showToastMessage = (text: string, option?:Object) => {
  Toastify({
    text,
    duration: 3000,
    style: {
      background:"#14746F",
    },
    ...option
  }).showToast();
};

export default showToastMessage;