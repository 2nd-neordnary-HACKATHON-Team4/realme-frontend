import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
  Platform,
  SafeAreaView,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import LoginButton from '../components/LoginButton';
import {axiosInstance} from '../queries';
import authStorage from '../storages/authStorage';

function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  // email: 'abcd123@gmail.com',
  // password: 'abcd1234!',
  const postLogIn = () => {
    axiosInstance
      .post('/users/login', {
        email: email,
        password: password,
      })
      .then(response => {
        if (response.data.isSuccess) {
          axiosInstance.defaults.headers[
            'x-access-token'
          ] = `${response.data.result}`;
          // authStorage.set(response.data.result);
          Alert.alert('로그인 되었습니다!', '', [
            {
              text: '',
              onPress: () => {
                navigation.navigate('Root');
              },
            },
          ]);
        } else {
          Alert.alert(`${response.data.message} 다시 시도하세요.`, '', [
            {
              text: '',
              onPress: () => {
                setEmail('');
                setPassword('');
              },
            },
          ]);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <SafeAreaView style={styles.fullscreen}>
      <Image
        style={styles.image}
        source={require('../assets/socialIcons/logo.png')}
      />
      <View style={styles.input}>
        <TextInput
          style={[styles.borderedInput, styles.margin]}
          placeholder="ID"
          placeholderTextColor={'#C8CBCF'}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.borderedInput}
          placeholder="Password"
          placeholderTextColor={'#C8CBCF'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.button}>
          <Text style={styles.search}>아이디 찾기 / 비밀번호 찾기</Text>
          <LoginButton
            name="로그인"
            send={true}
            onPress={() => {
              postLogIn();
              setEmail('');
              setPassword('');
            }}
          />
          <View style={styles.social}>
            <View style={styles.socialText}>
              <View style={styles.vector} />
              <Text style={styles.middleText}>소셜로그인</Text>
              <View style={styles.vector} />
            </View>
            <View style={styles.socialIcon}>
              <Image
                style={styles.socialImg}
                source={require('../assets/socialIcons/카카오.png')}
              />
              <Image
                style={styles.socialImg}
                source={require('../assets/socialIcons/네이버.png')}
              />
              <Image
                style={styles.socialImg}
                source={require('../assets/socialIcons/구글.png')}
              />
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.signUp}>
              <Text style={styles.signUpText}>아직 회원이 아니신가요?</Text>
              <Pressable
                onPress={() => {
                  navigation.push('SignUp');
                }}>
                <Text style={styles.signUpBtn}>회원가입하기</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 191,
    height: 43,
    marginBottom: 91,
  },
  input: {
    width: 312,
  },
  button: {
    marginTop: 20,
  },
  search: {
    fontSize: 12,
    color: '#8B95A1',
    marginBottom: 20,
    textAlign: 'right',
  },
  social: {
    marginVertical: 70,
    alignItems: 'center',
  },
  socialText: {
    width: 240,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vector: {
    width: 76,
    height: 0.5,
    backgroundColor: '#8B95A1',
  },
  middleText: {
    fontSize: 12,
    color: '#8B95A1',
    marginBottom: 20,
    marginHorizontal: 16,
  },
  socialIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 240,
  },
  socialImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  bottom: {
    width: '100%',
    alignItems: 'center',
  },
  signUp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 201,
    height: 18,
  },
  signUpText: {
    fontSize: 12,
    color: '#40433B',
  },
  signUpBtn: {
    fontSize: 12,
    color: '#32E7DC',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  borderedInput: {
    borderColor: '#F2F1F6',
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 10,
    width: 312,
    height: 51,
    backgroundColor: '#F2F1F6',
    fontSize: 15,
  },
  margin: {
    marginBottom: 14,
  },
});

export default LoginScreen;
