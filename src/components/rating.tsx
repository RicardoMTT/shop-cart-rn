import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';

// export const Rating = ({rating}) => {
//   const paintedStar = require('../assets/estrella.png');
//   const emptyStar = require('../assets/estrella_vacia.png');
//   var myloop = [];

//   const convertRating = Math.floor(rating);

//   for (let i = 0; i <= 5; i++) {
//     if (i < convertRating) {
//       myloop.push(<Image key={i} source={paintedStar} style={styles.logo} />);
//     } else {
//       myloop.push(<Image key={i} source={emptyStar} style={styles.logo} />);
//     }
//   }

//   return <View style={{display: 'flex'}}>{myloop}</View>;
// };

export const Rating = ({rating}: any) => {
  const paintedStar = require('../assets/estrella.png');

  return (
    <View style={styles.container}>
      <Image source={paintedStar} style={styles.logo} />
      <Text>{rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 20,
    width: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
});
