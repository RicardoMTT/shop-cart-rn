import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../../context/providers/authContext';

// const ButtonGradient = () => {
//   return (
//     <TouchableOpacity style={styles.container} onPress={}>
//       <LinearGradient
//         // Button Linear Gradient
//         colors={['#FFB677', '#FF3CBD']}
//         start={{x: 0, y: 0}}
//         end={{x: 1, y: 1}}
//         style={styles.button}>
//         <Text style={styles.text}>SIGN IN</Text>
//       </LinearGradient>
//     </TouchableOpacity>
//   );
// };
export const SigninScreen = () => {
  const {signin, isLoading} = useContext(AuthContext);

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
        <Text>¿Do you have an account?</Text>
        <Text style={styles.signupBold}>Signup</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 300,
  },
  signupBold:{
    fontWeight:'bold',
    marginLeft:8
  },
  signup: {
    display: 'flex',
    flexDirection:'row',
    padding: 10,
    paddingStart: 30,
    width: '80%'
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  text: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
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
});
