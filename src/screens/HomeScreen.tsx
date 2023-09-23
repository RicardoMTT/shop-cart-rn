import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
  Platform,
  Dimensions,
} from 'react-native';
import {ProductItem} from '../components/productItem';
import {ProductContext} from '../context/providers/productsContext';
import {ThemeContext} from '../context/providers/themeContext';
import useDelayedFunctionCall from '../hooks/useDelay';
import { SearchInput } from '../components/search';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('window').width;
export const HomeScreen = () => {
  const {products, loadProducts,searchProductByTermApi} = useContext(ProductContext);
  // const [isEnabled, setIsEnabled] = useState(false);
  const {value, changeDarkLightMode} = useContext(ThemeContext);
  const [text, handleChangeText] = useDelayedFunctionCall('', 1000);
  const toggleSwitch = (valueSwitch: any) => {
    changeDarkLightMode(valueSwitch);
  };

  const { top } = useSafeAreaInsets();
 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    loadProducts();
  }, []);

  console.log('productsproductsproductsproducts:::',products);
  

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
      marginBottom:30
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

  const searchProductByTerm = (term:any) => {
    
    if (term.length > 0) {
      searchProductByTermApi(term); 
    }
    
  }
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
              <SearchInput
                onDebounce={ (value) => searchProductByTerm(value)  }
                style={{
                    width: screenWidth - 40,
                    top: ( Platform.OS === 'ios' ) ? top : top + 30
                }}
            />
          </View>
        )}
        data={products}
        renderItem={({item}) => <ProductItem product={item} />}
        columnWrapperStyle={style.row} // space them out evenly
        keyExtractor={(item: any) => item.id}
        numColumns={2}
      />
    </View>
  );
};
