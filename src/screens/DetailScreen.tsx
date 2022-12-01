import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../navigation/HomeNavigation';
import LinearGradient from 'react-native-linear-gradient';
export type DetailsScreenRouteProp = RouteProp<RootStackParams, 'DetailScreen'>;

export const DetailScreen = (product: any) => {
  const productDetail = product.route.params.product;
  // const route = useRoute<DetailsScreenRouteProp>();
  // const product2 = route.params.product;
  const navigation = useNavigation();
  const navigateToHome = () => {
    navigation.navigate('HomeScreen' as never);
  };

  const emptyStar = require('../assets/previous.png');

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: `https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png`,
        }}
        style={styles.image}
      />
      <View style={styles.text}>
        <TouchableOpacity onPress={() => navigateToHome()}>
          <Image source={emptyStar} style={styles.button} />
        </TouchableOpacity>
        <Text style={styles.fontDescription}>Description</Text>
        <Text>{productDetail.descripcion}</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro
          cum tenetur officiis possimus sequi accusantium dignissimos nihil
          expedita molestias sapiente velit ducimus enim sunt, temporibus
          eveniet ad laboriosam similique odit vitae quidem ullam! Quis ex iste
          facere qui assumenda iure corporis iusto atque minima mollitia totam,
          et quae recusandae.
        </Text>
        <View style={styles.horizontalLine}></View>

        <Text style={styles.price}>$ {productDetail.precio}.00</Text>

        <TouchableOpacity style={styles.containerBtn}>
          <LinearGradient
            colors={['#FFB677', '#FF3CBD']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.buttonCart}>
            <Text style={styles.textCart}>Add to cart</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
