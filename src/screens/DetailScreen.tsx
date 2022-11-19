import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const DetailScreen = () => {
  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <TouchableOpacity onPress={() => navigateTo()}>
      <View>
        <Text>Detail Screen</Text>
      </View>
    </TouchableOpacity>
  );
};
