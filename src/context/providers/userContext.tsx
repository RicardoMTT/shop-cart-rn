import React from 'react';
import {createContext, useContext, useReducer} from 'react';
import {profile} from '../../api/authApi';
import {UserActions} from '../actions/userActions';
import {userReducer, initialState} from '../reducer/userReducer';

export const UserContext = createContext(initialState);

export const userAuth = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(UserContext);
  return context;
};

export const UserProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const getProfile = async () => {
    dispatch({
      type: UserActions.USER,
    });
    try {
      // Get profile
      const res = await profile();
      
      if (res.data) {
        dispatch({
          type: UserActions.USER_SUCCESS,
          payload: res.data.data,
        });
        return res.data.data;
      }
    } catch (error) {
      dispatch({
        type: UserActions.USER_ERROR,
        payload: {},
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        getProfile,
      }}>
      {children}
    </UserContext.Provider>
  );
};
