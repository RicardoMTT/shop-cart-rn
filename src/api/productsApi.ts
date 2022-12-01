import axios from 'axios';

const API = 'https://dummyjson.com/products';
export const getProducts = async () => await axios.get(`${API}`);

export const getProductsStrapi = async () =>
  await axios.get('https://para-pruebas-back.herokuapp.com/productos');
