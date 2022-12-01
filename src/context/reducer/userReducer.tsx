import {UserActions} from '../actions/userActions';

export const initialState = {
  user: null,
  isLoading: false,
  errorMessage: null,
  getProfile: () => Promise<void>,
};
export const userReducer = (state: any = initialState, action: any) => {
  const {type, payload} = action;
  
  switch (type) {
    case UserActions.USER:
      return {
        ...state,
        isLoading: true,
      };

    case UserActions.USER_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'error',
      };

    case UserActions.USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
  }
};
