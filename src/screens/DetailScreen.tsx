import React, {useContext} from 'react';
import {RouteProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {RootStackParams} from '../navigation/HomeNavigation';
import LinearGradient from 'react-native-linear-gradient';
import {CartContext} from '../context/providers/cartContext';
export type DetailsScreenRouteProp = RouteProp<RootStackParams, 'DetailScreen'>;

export const DetailScreen = (product: any) => {
  const productDetail = product.route.params.product;
  // const route = useRoute<DetailsScreenRouteProp>();
  // const product2 = route.params.product;
  const {appendItemToCart} = useContext(CartContext);

  const navigation = useNavigation();
  const navigateToHome = () => {
    navigation.navigate('HomeScreen' as never);
  };

  console.log('product<<<<<<<<<<<<<<', productDetail);

  // const emptyStar = require('../assets/previous.png');

  const appendItemToCartFn = () => {
    appendItemToCart(productDetail);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: productDetail.images[0],
          }}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.text}>
        <TouchableOpacity onPress={() => navigateToHome()}>
          <Image
            source={{uri: productDetail.images[0]}}
            style={styles.button}
          />
        </TouchableOpacity>
        <Text style={styles.fontDescription}>Description</Text>
        <Text>{productDetail.description}</Text>
        <View style={styles.horizontalLine}></View>

        <Text style={styles.price}>$ {productDetail.price}.00</Text>
      </View>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 10,
          position: 'absolute',
          bottom: 20,
        }}>
        <TouchableOpacity
          style={styles.containerBtn}
          onPress={() => appendItemToCartFn()}>
          <LinearGradient
            colors={['#FFB677', '#FF3CBD']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.buttonCart}>
            <Text style={styles.textCart}>Add to cart</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    bottom: 385,
    width: 40,
    height: 40,
  },
  price: {fontWeight: 'bold', fontSize: 26, color: 'black'},
  horizontalLine: {
    borderBottomColor: 'gray',
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    width: '100%',
  },
  containerBtn: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  fontDescription: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  image: {
    width: '100%',
    height: 300,
  },
  text: {
    padding: 10,
  },
  buttonCart: {
    width: '70%',
    height: 60,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  textCart: {
    color: 'white',
    fontSize: 20,
  },
});
