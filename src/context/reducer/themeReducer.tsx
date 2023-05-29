import {ThemeActions} from '../actions/themeActions';

export const initialStateValue = {
  value: 'light',
};

export const initializer = (initialState = initialStateValue) => initialState;

export const themeReducer = (
  state: any = initialStateValue,
  {type, payload}: any,
) => {
  switch (type) {
    case ThemeActions.CHANGE_MODE: {
      console.log('payload.value', payload.value);

      return {
        ...state,
        value: payload.value ? 'dark' : 'light',
      };
    }

    default:
      return state;
  }
};
