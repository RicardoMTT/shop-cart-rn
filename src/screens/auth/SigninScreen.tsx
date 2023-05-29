import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../../context/providers/authContext';
import {ThemeContext} from '../../context/providers/themeContext';

export const SigninScreen = () => {
  const {signin, isLoading, errorMessage} = useContext(AuthContext);
  const {value, changeDarkLightMode} = useContext(ThemeContext);

  console.log('value', value);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };
  const onChangePassword = (text: string) => {
    setPassword(text);
  };
  const loginFn = async () => {
    const response = await signin({email, password});
  };

  const toggleSwitch = (valueSwitch: any) => {
    console.log('value', valueSwitch);

    changeDarkLightMode(valueSwitch);
  };

  const styles = StyleSheet.create({
    messageError: {
      color: '#EB3654',
      fontSize: 15,
      marginTop: 10,
    },
    container: {
      alignItems: 'center',
      width: 300,
    },
    signupBold: {
      fontWeight: 'bold',
      marginLeft: 8,
      color: value === 'dark' ? '#f1f1f1' : 'black',
    },
    haveAccount: {
      color: value === 'dark' ? '#f1f1f1' : 'black',
    },
    signup: {
      display: 'flex',
      flexDirection: 'row',
      padding: 10,
      paddingStart: 30,
      width: '80%',
    },
    main: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      // backgroundColor: '#f1f1f1',
      backgroundColor: value === 'dark' ? 'black' : '#f1f1f1',
    },
    text: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold',
    },
    title: {
      fontSize: 32,
      color: value === 'dark' ? '#f1f1f1' : 'black',
    },
    darkModeText:{
      color: value === 'dark' ? '#f1f1f1' : 'black',
    },
    button: {
      width: '50%',
      height: 50,
      borderRadius: 25,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
    textInput: {
      padding: 10,
      paddingStart: 30,
      width: '80%',
      height: 50,
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: '#fff',
    },
    containerSwitch: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="test@email.com"
          style={styles.textInput}
          onChangeText={onChangeEmail}
        />
        <TextInput
          placeholder="********"
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={onChangePassword}
        />
        <Text style={styles.messageError}>
          {errorMessage && 'Email or password incorrect'}
        </Text>
      </View>
      <View style={styles.containerSwitch}>
        <Text style={styles.darkModeText}>Dark mode</Text>
        <Switch
          trackColor={{false: 'white', true: 'black'}}
          thumbColor={value === 'dark' ? 'white' : 'black'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={value === 'dark' ? true : false}
        />
      </View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => loginFn()}
        disabled={isLoading}>
        <LinearGradient
          colors={['#FFB677', '#FF3CBD']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.button}>
          <Text style={styles.text}>
            {isLoading ? 'Loading...' : 'SIGN IN'}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.signup}>
        <Text style={styles.haveAccount}>¿Do you have an account?</Text>
        <Text style={styles.signupBold}>Signup</Text>
      </View>
    </View>
  );
};
