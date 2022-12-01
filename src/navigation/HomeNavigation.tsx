import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';

export type RootStackParams = {
  HomeScreen: undefined; //Si no  recibe nada como parametro se envia undefined
  DetailScreen: any;
};

const Stack = createStackNavigator<RootStackParams>();
/*
mover la pantalla desde la dirección x del ancho de pantalla completa en la dirección izquierda para ajustar la pantalla. 
*/
const leftToRightAnimation = {
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [-layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
export const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({route: {params}}) => ({
          cardStyleInterpolator: params?.withAnimation
            ? CardStyleInterpolators.forHorizontalIOS
            : CardStyleInterpolators.forNoAnimation,
        })}
      />
    </Stack.Navigator>
  );
};
