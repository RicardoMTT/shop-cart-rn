import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SigninScreen} from '../screens/auth/SigninScreen';
import {SignupScreen} from '../screens/auth/SignupScreen';

export type RootStackParams = {
  SigninScreen: undefined; //No recibe nada como parametro, SigninScreen es el nombre de tu ruta
  SignupScreen: undefined; //No recibe nada como parametro
  // DetailScreen: Movie; //Recibe un movie como parametro
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
};
