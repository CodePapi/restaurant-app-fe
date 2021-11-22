import Axios from 'axios';

const SERVER_HOST = process.env.SERVER_HOST;
let baseURL;
if(SERVER_HOST){
  baseURL = `${SERVER_HOST}/api/`;
}else{
  const host='http://restaurant-env.eba-ami6wnm7.us-east-2.elasticbeanstalk.com';
  baseURL = `${host}/api/`;
}

const AxiosCall = async requestObj => {
  const { path, method, data, contentType } = requestObj;
  const token = localStorage.getItem('authToken');
 
  let headers = { 
    Authorization: `Bearer `+ token,
    'Content-Type': contentType || 'application/json'
  };

  const url = `${baseURL}${path}`;
  try {
    const response = await Axios({ method, url, data, headers, json: true });
    const result = response && response.data;
    return result;
  } catch (error) {
    if(error.response.status === 401){
      localStorage.setItem('authToken', '');
      window.location.href = '/login';
    }
    throw error;
  }
};

export default AxiosCall;