import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {UserProfileScreen} from '../screens/user/UserProfileScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {AuthContext, useAuth} from '../context/providers/authContext';
import {CartScreen} from '../screens/cart/CartScreen';
import {useNavigation} from '@react-navigation/native';
import {useCart} from '../context/providers/cartContext';
import TranslateScreen from '../screens/TranslateScreen';
import {ThemeContext} from '../context/providers/themeContext';

type StackParams = {
  HomeScreen: undefined; //HomeNavigation es el name que defines en tu navigator
  UserProfileScreen: undefined;
  DetailScreen: undefined;
  CartScreen: undefined;
  TranslateScreen: undefined;
};

const Drawer = createDrawerNavigator<StackParams>();

export const MenuLateral = () => {
  const {user} = useAuth();
  const navigation = useNavigation();
  const {totalItems} = useCart();
  const {value} = useContext(ThemeContext);

  return (
    <Drawer.Navigator drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: value === 'dark' ? 'black' : '#f1f1f1',
          },
          headerTintColor: value === 'dark' ? '#f1f1f1' : 'black',
          headerRight() {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('CartScreen')}>
                <Icon
                  name="cart-outline"
                  size={30}
                  color={value === 'dark' ? '#f1f1f1' : '#504F52'}
                  style={style.cart}
                />
                <Text
                  style={{
                    position: 'relative',
                    bottom: 30,
                    right: -16,
                    top: -30,
                    backgroundColor: '#1152FD',
                    color: 'white',
                    borderRadius: 100,
                    textAlign: 'center',
                    width: 20,
                    height: 20,
                  }}>
                  {totalItems}
                </Text>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Drawer.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="CartScreen"
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="TranslateScreen"
        component={TranslateScreen}
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
            uri: 'https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/S4M0CdQhrn3l6L5kKA0--avlY00=/930x0/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/VDA2OKJUXJDSRNL76H44LQFNWY.jpg',
            width: 280,
            height: 120,
          }}
          style={style.image}
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

        <TouchableOpacity
          style={style.flexRow}
          onPress={() => navigation.navigate('TranslateScreen')}>
          <Text> Translate</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.flexRow}
          onPress={() => navigation.navigate('CartScreen')}>
          <Text> Cart</Text>
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
  cart: {
    marginRight: 10,
    position: 'relative',
    bottom: -5,
  },
  image: {
    height: 200,
    resizeMode: 'stretch',
  },
});
