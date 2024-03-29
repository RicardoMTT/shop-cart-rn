import {createContext, useContext, useReducer, useEffect} from 'react';
import {CartActions} from '../actions/cartActions';
import {initialState, cartReducer, initializer} from '../reducer/cartReducer';

export const CartContext = createContext(initialState);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

export const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, initializer);
  useEffect(() => {
    // localStorage.setItem('cart', JSON.stringify(state));
    // you should use AsyncStorage
  }, [state]);

  const appendItemToCart = (item, increment = 1) => {
    console.log('item a guardar en el cart', item);

    dispatch({ 
      type: CartActions.APPEND_ITEM,
      payload: {
        item,
        increment: parseInt(increment),
      },
    });
  };

  const removeItem = item =>
    dispatch({
      type: CartActions.REMOVE_ITEM,
      payload: item,
    });

  const clearCart = () =>
    dispatch({
      type: CartActions.CLEAR_CART,
    });

  const decrementItem = (item, decrement = 1) =>
    dispatch({
      type: CartActions.DECREMENT_ITEM,
      payload: {
        item,
        decrement: parseInt(decrement),
      },
    });

  return (
    <CartContext.Provider
      value={{
        ...state,
        appendItemToCart,
        removeItem,
        clearCart,
        decrementItem,
      }}>
      {children}
    </CartContext.Provider>
  );
};
