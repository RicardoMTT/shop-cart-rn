import {ProductActions} from '../actions/productActions';

export const initialState = {
  products: [],
  isLoading: false,
  errorMessage: '',
};

export const productReducer = (state: any, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case ProductActions.PRODUCT_LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case ProductActions.PRODUCT_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    case ProductActions.PRODUCT_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
  }
};
