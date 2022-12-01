import React, {useContext} from 'react';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {UserProfileScreen} from '../screens/user/UserProfileScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {AuthContext, useAuth} from '../context/providers/authContext';

type StackParams = {
  HomeScreen: undefined; //HomeNavigation es el name que defines en tu navigator
  UserProfileScreen: undefined;
  DetailScreen: undefined;
};

const Drawer = createDrawerNavigator<StackParams>();

export const MenuLateral = () => {
  const {user} = useAuth();
  return (
    <Drawer.Navigator drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerRight: () => {
            return <Text>Carrito</Text>;
          },
        }}
      />
      <Drawer.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{
          title: user && user.cliente ? user.cliente.nombre : 'My profile',
        }}
      />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: any) => {
  const {signOut} = useContext(AuthContext);
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

        <TouchableOpacity style={style.flexRow} onPress={() => signOut()}>
          <Text> Signout</Text>
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
