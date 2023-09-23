import {ProductActions} from '../actions/productActions';

export const initialState = {
  products:[],
  isLoading: false,
  errorMessage: '',
};

export const productReducer = (state: any, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case ProductActions.PRODUCT_LOAD:
      console.log('load');
      
      return {
        ...state,
        isLoading: true,
      };
    case ProductActions.PRODUCT_LOAD_SUCCESS:
      console.log('success',payload);
        
    return {
        ...state,
        isLoading: false,
        products: payload,
      };
      case ProductActions.PRODUCT_LOAD_ERROR:
        console.log('error');
          
      return {
          ...state,
          isLoading: false,
          errorMessage: payload,
        };

        
    case ProductActions.SEARCH_PRODUCT:
      console.log('uuuuu',payload);
      
      return {
        ...state,
        products:payload
      };
  }
};
