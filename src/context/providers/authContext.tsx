import React from 'react';

import {createContext, useContext, useReducer} from 'react';
import {login, loginStrapi} from '../../api/authApi';
import {AuthActions} from '../actions/authActions';
import {authReducer, initialState} from '../reducer/authReducer';
import {ProductContext} from './productsContext';
import axios from 'axios';

export const AuthContext = createContext(initialState);

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const {loadProducts} = useContext(ProductContext);

  const signOut = () => {
    dispatch({
      type: AuthActions.AUTH_SIGNOUT,
    });
  };

  const signin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    dispatch({
      type: AuthActions.AUTH_SIGNIN,
    });

    try {
      const res = await axios.post('https://reqres.in/api/login', {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      });

      const {token} = res.data;
      const user = {
        name: 'ricardo',
        lastName: 'tovar',
        email:"tricardo003@gmail.com"
      };
      if (token) {
        dispatch({
          type: AuthActions.AUTH_SIGNIN_SUCCESS,
          payload: {
            token: token,
            user: user,
          },
        });
        // loadProducts();

        return token;
      }
    } catch (error) {
      console.log('errorssssss', error);
      dispatch({
        type: AuthActions.AUTH_SIGNIN_ERROR,
        payload: {
          message: 'auth error',
        },
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signin,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
