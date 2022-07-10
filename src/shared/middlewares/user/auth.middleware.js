import { post } from '../../services/http.services';

const ENDPOINT = 'user/login';

export const login = (email, password) => {
  email = email.trim().toLowerCase();

  return post(ENDPOINT, { email, password})
  .then((res) => {
    if(!res.data?.token){
      return{ error: res.data || "Unexpected error"};
    }
    return res.data;
  })
  .catch((err) => {
    throw { err, message: err.data.message }
  })
};