import React from 'react';
import {createContext, useContext, useReducer} from 'react';
import {getProducts, getProductsStrapi} from '../../api/productsApi';
import {Product} from '../../interfaces/product.interface';
import {ProductActions} from '../actions/productActions';
import {initialState, productReducer} from '../reducer/productReducer';

export const ProductContext = createContext(initialState);

export const mock_products = [
  {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 2,
    title: 'iPhone X',
    description:
      'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/2/1.jpg',
      'https://i.dummyjson.com/data/products/2/2.jpg',
      'https://i.dummyjson.com/data/products/2/3.jpg',
      'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    ],
  },
  {
    id: 3,
    title: 'Samsung Universe 9',
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: 'Samsung',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
    images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
  },
  {
    id: 2,
    title: 'test',
    description:
      'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    price: 399,
    discountPercentage: 17.94,
    rating: 2.44,
    stock: 1,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/2/1.jpg',
      'https://i.dummyjson.com/data/products/2/2.jpg',
      'https://i.dummyjson.com/data/products/2/3.jpg',
      'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    ],
  },
];
export const useProducts = () => {
  const context = useContext(ProductContext);
  return context;
};

export const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  
  const searchProductByTermApi = (term: string) => {
    let products = mock_products.filter((product) => product.title.includes(term) );
    console.log(products);
    
    dispatch({
      type: ProductActions.SEARCH_PRODUCT,
      payload: products,
    });
  }


  const loadProducts = async () => {
    dispatch({
      type: ProductActions.PRODUCT_LOAD,
    });
    try {
      console.log('probando');

      // const resp = await getProducts();
      // const resp =mock_products;

      const products = mock_products;
      console.log('zzz');
      
      dispatch({
        type: ProductActions.PRODUCT_LOAD_SUCCESS,
        payload: products,
      });
    } catch (error: any) {
      console.log('errror productos', error);

      dispatch({
        type: ProductActions.PRODUCT_LOAD_ERROR,
        payload: error.message,
      });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        loadProducts,
        searchProductByTermApi
      }}>
      {children}
    </ProductContext.Provider>
  );
};
