import {AuthActions} from '../actions/authActions';

export const initialState = {
  isLoggedIn: false,
  user: null,
  token: '',
  errorMessage: null,
  isLoading: false,
};

export const authReducer = (state: any = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case AuthActions.AUTH_SIGNOUT:
      return {
        ...state,
        isLoading: false,
        token: null,
        isLoggedIn: false,
      };
    case AuthActions.AUTH_SIGNIN:
      return {
        ...state,
        isLoading: true,
      };

    case AuthActions.AUTH_SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        user: payload.user,
        errorMessage: null,
        isLoggedIn: true,
      };
    case AuthActions.AUTH_SIGNIN_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
