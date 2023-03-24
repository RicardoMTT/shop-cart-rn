import React from 'react';
import {createContext, useContext,  useReducer} from 'react';
import {getProducts, getProductsStrapi} from '../../api/productsApi';
import {Product} from '../../interfaces/product.interface';
import {ProductActions} from '../actions/productActions';
import {initialState, productReducer} from '../reducer/productReducer';

export const ProductContext = createContext(initialState);

export const useProducts = () => {
  const context = useContext(ProductContext);
  return context;
};

export const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const loadProducts = async () => {
    dispatch({
      type: ProductActions.PRODUCT_LOAD,
    });
    try {
      const resp = await getProducts();

      const products: Product[] = resp.data;
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
      }}>
      {children}
    </ProductContext.Provider>
  );
};
