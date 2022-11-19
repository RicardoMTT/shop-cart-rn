import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {userAuth} from '../../context/providers/userContext';

export const UserProfileScreen = () => {
  const {user, isLoading, getProfile} = userAuth();

  useEffect(() => {
    getProfile();
  }, []);
  const edit = require('../../assets/edit.png');

  if (isLoading) {
    return <Text>Cargando ....</Text>;
  }
  if (user) {
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qC3u80eU1l5d-nmVYN9r0fSktSSxiAMkwFhY5N_p&s',
            }}
            style={styles.image}
          />
          <Image source={edit} style={styles.edit} />
          <Text style={styles.fontUser}>{user.data.first_name} 24</Text>
          <Text style={styles.role}>Software Engineer</Text>
        </View>

        <TextInput placeholder="Email Address" style={styles.input} />

        <TextInput placeholder="first name" style={styles.input} />
        <TextInput placeholder="last name" style={styles.input} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  fontUser: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  role: {
    fontSize: 18,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  containerImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomColor: '#DFDDDD',
    borderBottomWidth: 1.3,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  edit: {
    height: 25,
    width: 25,
    position: 'relative',
    top: -16,
    left: 25,
  },
});
