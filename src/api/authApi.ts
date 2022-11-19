import axios from 'axios';

// export const register = async user => await axios.post(`${API}/register`, user);

export const login = async (user: any) =>
  await axios.post('https://reqres.in/api/login', user);

// export const profile = async token =>
//   await axios.get(`${API}/profile`, {
//     headers: {
//       Authorization: token,
//     },
//   });
