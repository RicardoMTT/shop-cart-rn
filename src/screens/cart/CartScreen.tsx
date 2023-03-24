import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useCart} from '../../context/providers/cartContext';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export const CartScreen = () => {
  const navigation = useNavigation();

  const {
    items,
    totalPrice,
    totalItems,
    appendItemToCart,
    removeItem,
    clearCart,
    decrementItem,
  } = useCart();
  const [quantity, setQuantity] = useState(0);

  const decrementItemToCart = item => {
    decrementItem(item);
  };

  const incrementItemToCart = item => {
    appendItemToCart(item);
  };
  console.log('items', items);

  const ListItem = ({item}) => {
    console.log('item', item);

    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 20,
          borderColor: '#D5DDE0',
          borderWidth: 1,
          borderRadius: 10,
        }}>
        <View style={{width: '30%'}}>
          <Image
            source={{
              uri: item.images[0],
            }}
            style={{width: 100, height: 100}}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
            paddingLeft: 10,
          }}>
          <Text
            style={{
              color: '#3E4958',
              fontSize: 17,
              fontWeight: '600',
              fontFamily: 'Montserra',
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 16,
              lineHeight: 17,
            }}>
            $/.{item.price}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              height: 40,
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => decrementItemToCart(item)}>
              <Text
                style={{
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: 26,
                }}>
                -
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: 16,
                borderColor: '#D5DDE0',
                marginHorizontal: 10,
                borderWidth: 0.5,
                paddingHorizontal: 5,
              }}>
              {item.quantity}
            </Text>
            <TouchableOpacity onPress={() => incrementItemToCart(item)}>
              <Text
                style={{
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: 26,
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  if (items.length == 0) {
    return (
      <View>
        <Text>Empty cart</Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 10,
          marginTop: 10,
        }}>
        <Icon
          onPress={() => navigation.goBack()}
          name="arrow-back-outline"
          size={30}
          color="#504F52"
        />
        <Text
          style={{
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 26,
            lineHeight: 32,
            color: '#3E4958',
          }}>
          My cart
        </Text>
      </View>
      <View style={{padding: 10}}>
        {items.map((item, index) => (
          <ListItem item={item} key={index} />
        ))}
      </View>

      <View
        style={{
          width: '100%',
          paddingHorizontal: 10,
          position: 'absolute',
          bottom: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Impuesto</Text>
          <Text>{(totalPrice * 0.1).toFixed(2)}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Subtotal</Text>
          <Text>{totalPrice}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Total</Text>
          <Text>{totalPrice + totalPrice * 0.1}</Text>
        </View>
        <View
          style={{
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: '#1152FD',
              width: 300,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
              Buy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
