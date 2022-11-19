import React, {useContext} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ProductItem} from '../components/productItem';
import {ProductContext} from '../context/providers/productsContext';

export const HomeScreen = () => {
  const {products} = useContext(ProductContext);

  return (
    <View style={style.main}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem product={item} />}
        columnWrapperStyle={style.row} // space them out evenly
        keyExtractor={(item: any) => item.id}
        numColumns={2}
      />
    </View>
  );
};
const style = StyleSheet.create({
  main:{
    marginTop:10
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
