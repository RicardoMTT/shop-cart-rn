import React, {useContext} from 'react';
import {RouteProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {RootStackParams} from '../navigation/HomeNavigation';
import LinearGradient from 'react-native-linear-gradient';
import {CartContext} from '../context/providers/cartContext';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from '../components/carousel';
import {ThemeContext} from '../context/providers/themeContext';

export type DetailsScreenRouteProp = RouteProp<RootStackParams, 'DetailScreen'>;

export const DetailScreen = (product: any) => {
  const productDetail = product.route.params.product;
  // const route = useRoute<DetailsScreenRouteProp>();
  const {value} = useContext(ThemeContext);

  // const product2 = route.params.product;
  const {appendItemToCart} = useContext(CartContext);
  console.log('productDetail', productDetail);

  const navigation = useNavigation();
  const navigateToHome = () => {
    navigation.navigate('HomeScreen' as never);
  };

  const appendItemToCartFn = () => {
    appendItemToCart(productDetail);
  };

  const styles = StyleSheet.create({
    button: {
      position: 'relative',
      bottom: 385,
      width: 40,
      height: 40,
    },
    price: {
      fontWeight: 'bold',
      fontSize: 26,
      color: value === 'dark' ? '#f1f1f1' : 'black',
    },
    horizontalLine: {
      borderBottomColor: 'gray',
      marginTop: 20,
      marginBottom: 20,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: value === 'dark' ? 'black' : '#f1f1f1',
    },
    containerBtn: {
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center',
    },
    fontDescription: {
      fontWeight: 'bold',
      fontSize: 25,
      color: value === 'dark' ? '#f1f1f1' : 'black',
    },
    fontDescriptionText: {
      color: value === 'dark' ? '#f1f1f1' : 'black',
    },
    image: {
      width: '100%',
      height: 300,
    },
    text: {
      padding: 10,
      color: value === 'dark' ? '#f1f1f1' : 'black',
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
    title: {
      fontSize: 25,
      color: value === 'dark' ? '#f1f1f1' : 'black',
    },
    btnContainer: {
      width: '100%',
      paddingHorizontal: 10,
      position: 'absolute',
      bottom: 20,
    },
    starContainer: {flexDirection: 'row', alignItems: 'center'},
    rating: {
      fontSize: 24,
      marginLeft: 5,
      color: value === 'dark' ? '#f1f1f1' : 'black',
    },
    goBack: {flexDirection: 'row', alignItems: 'center'},
  });

  return (
    <View style={styles.container}>
      <View style={styles.goBack}>
        <Icon
          onPress={() => navigation.goBack()}
          name="chevron-back-outline"
          size={30}
          color="#504F52"
        />
      </View>
      <Carousel images={productDetail.images} />

      {/* <View>
        <Image
          source={{
            uri: productDetail.images[0],
          }}
          resizeMode="cover"
          style={styles.image}
        />
      </View> */}
      <View style={styles.text}>
        <TouchableOpacity onPress={() => navigateToHome()}>
          <Image
            source={{uri: productDetail.images[0]}}
            style={styles.button}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{productDetail.title}</Text>
        <View style={styles.starContainer}>
          <Icon
            onPress={() => navigation.goBack()}
            name="star-outline"
            size={30}
            color="#FFC300"
          />
          <Text style={styles.rating}>{Math.round(productDetail.rating)}</Text>
        </View>
        <Text style={styles.fontDescription}>Description</Text>
        <Text style={styles.fontDescriptionText}>
          {productDetail.description}
        </Text>
        <View style={styles.horizontalLine}></View>

        <Text style={styles.price}>$ {productDetail.price}.00</Text>
      </View>
      <View style={styles.btnContainer}>
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
