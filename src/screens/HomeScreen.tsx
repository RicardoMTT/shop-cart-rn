import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
} from 'react-native';
import {ProductItem} from '../components/productItem';
import {ProductContext} from '../context/providers/productsContext';
import {ThemeContext} from '../context/providers/themeContext';

export const HomeScreen = () => {
  const {products, loadProducts} = useContext(ProductContext);
  // const [isEnabled, setIsEnabled] = useState(false);
  const {value, changeDarkLightMode} = useContext(ThemeContext);

  const toggleSwitch = (valueSwitch: any) => {
    changeDarkLightMode(valueSwitch);
  };
  console.log('productsproductsproductsproducts----', products);

  if (products.length === 0) {
    return (
      <View>
        <Text>No hay productos</Text>
      </View>
    );
  }
  const style = StyleSheet.create({
    styleContainerInput: {
      marginHorizontal: 30,
    },
    main: {
      // marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: value === 'dark' ? 'black' : '#f1f1f1',
      flex: 1,
    },
    row: {
      flex: 1,
      justifyContent: 'space-around',
    },

    textInput: {
      width: '100%',
      height: 50,
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: 'white',
      paddingLeft: 20,
    },
    textDarkMode: {
      color: value === 'dark' ? '#f1f1f1' : 'black',
    },
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <View style={style.main}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text style={style.textDarkMode}>Dark mode</Text>
        <Switch
          trackColor={{false: 'black', true: 'white'}}
          thumbColor={value === 'dark' ? 'black' : 'white'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={value === 'dark' ? true : false}
        />
      </View>
      <FlatList
        ListHeaderComponent={() => (
          <View style={style.styleContainerInput}>
            <TextInput placeholder="search product" style={style.textInput} />
          </View>
        )}
        data={products.products}
        renderItem={({item}) => <ProductItem product={item} />}
        columnWrapperStyle={style.row} // space them out evenly
        keyExtractor={(item: any) => item.id}
        numColumns={2}
      />
    </View>
  );
};
