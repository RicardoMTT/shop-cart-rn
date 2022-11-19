import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SigninScreen} from '../screens/SigninScreen';
import {SignupScreen} from '../screens/SignupScreen';

// export type RootStackParams = {
//   HomeScreen: undefined; //No recibe nada como parametro
//   DetailScreen: Movie; //Recibe un movie como parametro
// };
// const Stack = createStackNavigator<RootStackParams>();
const Stack = createStackNavigator();

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
