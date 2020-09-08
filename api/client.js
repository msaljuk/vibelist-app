import axios from 'axios';

const TIMEOUT = 10000;

const client = axios.create({
  baseURL: 'https://vibelist-api.herokuapp.com/api/v1/',
  timeout: TIMEOUT,
});

export const login = (email, password) => {
  return client
    .post('authenticate/login', {
      email: email,
      password: password,
    })
    .then((res) => res)
    .catch((err) => {
      console.log(err);
    });
};

export const getUserActivities = (userID) => {
  return client
    .get(`activities/${userID}`)
    .then((res) => res)
    .catch((err) => console.log(err));
};
