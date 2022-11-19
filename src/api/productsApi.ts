import axios from 'axios';

const API = 'https://dummyjson.com/products';
export const getProducts = async () => await axios.get(`${API}`);
