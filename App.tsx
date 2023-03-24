import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/providers/authContext';
import {ProductProvider} from './src/context/providers/productsContext';
import {IndexNavigation} from './src/navigation/IndexNavigation';
import {UserProvider} from './src/context/providers/userContext';
import {CartProvider} from './src/context/providers/cartContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CartProvider>
          <UserProvider>
            <ProductProvider>
              <IndexNavigation />
            </ProductProvider>
          </UserProvider>
        </CartProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};
export default App;
