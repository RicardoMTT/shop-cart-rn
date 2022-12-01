import React from 'react';

import {createContext, useContext, useReducer} from 'react';
import {login, loginStrapi} from '../../api/authApi';
import {AuthActions} from '../actions/authActions';
import {authReducer, initialState} from '../reducer/authReducer';

export const AuthContext = createContext(initialState);

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

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
      const res = await loginStrapi({identifier:email, password});
      
      const {jwt,user} = res.data;
      if (jwt) {
        dispatch({
          type: AuthActions.AUTH_SIGNIN_SUCCESS,
          payload: {
            token:jwt,
            user:user
          },
        });
        return jwt;
      }
    } catch (error) {
      console.log('error', error);
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
