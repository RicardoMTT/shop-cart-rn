import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {HomeScreen} from '../screens/HomeScreen';
import {UserProfileScreen} from '../screens/user/UserProfileScreen';
import {DetailScreen} from '../screens/DetailScreen';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  //   const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      //   drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="UserProfileScreen" component={UserProfileScreen} />
      <Drawer.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: any) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View>
        <Image
          source={{
            uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
            width: 280,
            height: 120,
          }}
        />
      </View>

      {/* Opciones de menú */}
      <View>
        <TouchableOpacity
          style={style.flexRow}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text> Home Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.flexRow}
          onPress={() => navigation.navigate('UserProfileScreen')}>
          <Text> Profile</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const style = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
});
