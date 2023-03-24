import React, {useContext, useEffect} from 'react';
import {FlatList, StyleSheet, View, Text, TextInput} from 'react-native';
import {ProductItem} from '../components/productItem';
import {ProductContext} from '../context/providers/productsContext';

export const HomeScreen = () => {
  const {products, loadProducts} = useContext(ProductContext);


  if (products.length == 0) {
    return (
      <View>
        <Text>No hay productos</Text>
      </View>
    );
  }
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <View style={style.main}>
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
const style = StyleSheet.create({
  styleContainerInput: {
    marginHorizontal: 30,
  },
  main: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
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
});
