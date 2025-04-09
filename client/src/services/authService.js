import axios from 'axios';

export const fetchWithAuth = (url) => {
  const token = localStorage.getItem("token");
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
