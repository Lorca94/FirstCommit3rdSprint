import axios from "axios";

const _axios = axios.create({
  baseURL: process.env.FC_API_URL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/pdf",
  },
});

export const get = async (endpoint) => {
  return await _axios
    .get(endpoint)
    .then((res) => res.data)
    .catch((error) => error);
};

export const post = async (endpoint, data) => {
  let postConfig = {};

  return await _axios.post(endpoint, data, postConfig);
};

export const put = async (endpoint, data) => {
  let postConfig = {};

  return await _axios.put(endpoint, data, postConfig);
};

export const remove = async (endpoint) => {
  return await axios.delete(endpoint);
};
