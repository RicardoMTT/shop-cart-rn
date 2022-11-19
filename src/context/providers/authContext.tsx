import React from 'react';

import {createContext, useContext, useReducer} from 'react';
import {login} from '../../api/authApi';
import {AuthActions} from '../actions/authActions';
import {authReducer, initialState} from '../reducer/authReducer';

export const AuthContext = createContext(initialState);

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

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
      const res = await login({email, password});
      
      const {token} = res.data;
      if (token) {
        dispatch({
          type: AuthActions.AUTH_SIGNIN_SUCCESS,
          payload: {
            token,
          },
        });
        return token;
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
      }}>
      {children}
    </AuthContext.Provider>
  );
};
