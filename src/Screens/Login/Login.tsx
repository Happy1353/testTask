import React, {useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import Toast from 'react-native-toast-message';

import WELCOMESVG from '../../assets/welcome.svg';
import EMAIL from '../../assets/email.svg';
import LOCK from '../../assets/lock.svg';

type Props = {
  navigation: any;
};

export const Login = ({navigation}: Props) => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginRef: any = useRef(null);
  const passwordRef: any = useRef(null);

  //open input password on full value of block
  const openLoginTextInput = () => {
    loginRef.current.focus();
  };

  //open input password on full value of block
  const openPasswordTextInput = () => {
    passwordRef.current.focus();
  };

  const Login = () => {
    if (login == 'admin' && password == 'password') {
      navigation.navigate('Main');
    } else {
      Toast.show({
        type: 'error',
        text1: 'Your creditionals invalid',
      });
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <View style={styles.container}>
        <SafeAreaView>
          <WELCOMESVG width={'100%'} />
        </SafeAreaView>
        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.title}>Welcome</Text>
            <Pressable style={styles.input} onPress={openLoginTextInput}>
              <EMAIL />
              <TextInput
                ref={loginRef}
                style={styles.inputContainer}
                onChangeText={setLogin}
                value={login}
                placeholder="email"
                placeholderTextColor={'#FFFFFF'}
                autoCapitalize="none"
              />
            </Pressable>
            <Pressable style={styles.input} onPress={openPasswordTextInput}>
              <LOCK />
              <TextInput
                ref={passwordRef}
                style={styles.inputContainer}
                onChangeText={setPassword}
                value={password}
                placeholder="password"
                placeholderTextColor={'#FFFFFF'}
                autoCapitalize="none"
                secureTextEntry={true}
              />
            </Pressable>
          </View>
          <TouchableOpacity style={styles.button} onPress={Login}>
            <Text style={styles.title}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Toast />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9933FF',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    backgroundColor: '#D9D9D9',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 24,
  },
  title: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 26,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#334B6A',
    borderRadius: 8,
    height: 52,
    paddingHorizontal: 12,
    marginTop: 20,
  },
  inputContainer: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    paddingLeft: 8,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#9933FF',
    borderRadius: 10,
    height: 52,
    marginTop: 20,
  },
});
