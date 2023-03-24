import React from 'react';
import {Image, StyleSheet, Text, View, Easing} from 'react-native';
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
      style={styles.container}
      onPress={() => {
        navigation.navigate('DetailScreen' as never, {product: product});
      }}>
      <View>
        <Image
          source={{
            uri: product.images[0],
          }}
          style={styles.image}
        />
        <View style={styles.main}>
          <Text style={styles.title}>{product.title}</Text>

          <View style={styles.rating}>
            <Text style={styles.price}>$/ {product.price}</Text>
            <Rating rating={4} />
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
    borderRadius: 10,
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
