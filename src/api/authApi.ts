import axios from 'axios';

// export const register = async user => await axios.post(`${API}/register`, user);

export const login = async (user: any) =>
  await axios.post('https://reqres.in/api/login', user);

export const loginStrapi = async (user: any) =>
  await axios.post('https://para-pruebas-back.herokuapp.com/auth/local', user);

// export const profile = async token =>
//   await axios.get(`${API}/profile`, {
//     headers: {
//       Authorization: token,
//     },
//   });

export const profile = async () =>
  await axios.get('https://para-pruebas-back.herokuapp.com');
