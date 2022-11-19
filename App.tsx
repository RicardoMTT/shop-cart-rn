import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/providers/authContext';
import {ProductProvider} from './src/context/providers/productsContext';
import {IndexNavigation} from './src/navigation/IndexNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ProductProvider>
          <IndexNavigation />
        </ProductProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};
export default App;
