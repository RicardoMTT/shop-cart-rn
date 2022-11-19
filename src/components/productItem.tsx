import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Product} from '../interfaces/product.interface';

import {useNavigation} from '@react-navigation/native';
import {Rating} from './rating';
import {TouchableOpacity} from 'react-native-gesture-handler';
interface Props {
  product: Product;
}

export const ProductItem = ({product}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailScreen', {name: 'Jane'});
      }}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-zapatillas-GjGXSP.png',
          }}
          style={styles.image}
        />
        <View style={styles.main}>
          <Text style={styles.title}>{product.title}</Text>

          <View style={styles.rating}>
            <Text style={styles.price}>$/ {product.price}</Text>
            <Rating rating={product.rating} />
          </View>
        </View>
        {/* <TouchableOpacity 
        onPress={() => {
          navigation.navigate('DetailScreen', {name: 'Jane'});
        }}
        style={styles.button}>
        <Text style={styles.text}>{product.title}</Text>
        <Text style={styles.text}>Buy</Text>
      </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    marginBottom: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: 150,
    height: 105,
    resizeMode: 'stretch',
  },
  logo: {
    width: 66,
  },
  button: {
    backgroundColor: 'black',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  main: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
