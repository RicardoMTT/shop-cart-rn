import {createContext, useContext, useReducer, useEffect} from 'react';
import {ThemeActions} from '../actions/themeActions';
import {
  initializer,
  initialStateValue,
  themeReducer,
} from '../reducer/themeReducer';

export const ThemeContext = createContext(initialStateValue);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

export const ThemeProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(
    themeReducer,
    initialStateValue,
    initializer,
  );
  useEffect(() => {}, [state]);

  const changeDarkLightMode = (value: any) => {
    console.log('valueeeeeeeeeee',value);
    
    dispatch({
      type: ThemeActions.CHANGE_MODE,
      payload: {
        value,
      },
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        changeDarkLightMode,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
