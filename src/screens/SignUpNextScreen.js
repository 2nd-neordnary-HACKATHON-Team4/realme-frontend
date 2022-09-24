import React, {useEffect, useState} from 'react';
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

function SignUpNextScreen({navigation, route, email, setEmail}) {
  const [send, isSend] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [valid, setValid] = useState(false);
  const [duplicate, setDuplicate] = useState(false);

  const fetchDuplication = async () => {
    axios
      .get('http://prod.sogogi.shop:9000/users/nickname/aa/duplication')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const fetchSignUp = async () => {
    axios
      .post('http://prod.sogogi.shop:9000/users/signup', {
        email: email,
        nickname: nickname,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onPressDuplication = () => {
    fetchDuplication;
  };

  const onPressSignUp = () => {
    if (password.length < 8) {
      setValid(true);
    }
    if (password !== confirmPassword) {
      setDuplicate(true);
    }
    fetchSignUp;
  };

  useEffect(() => {
    if (valid && password.length >= 8) {
      setValid(false);
    }
  }, [password]);
  useEffect(() => {
    if (duplicate && password === confirmPassword) {
      setDuplicate(false);
    }
  }, [confirmPassword]);

  console.log(route.params.email);
  return (
    <SafeAreaView style={styles.fullscreen}>
      <View style={styles.top}>
        {/* input component */}
        <View style={styles.box}>
          <Text style={styles.text}>비밀번호</Text>
          <TextInput
            style={styles.input}
            placeholder="특수기호 포함 8자리 이상"
            placeholderTextColor={'#C5CCD4'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        {valid ? (
          <Text style={styles.valid}>
            특수기호 포함 8자리 이상을 입력해주세요
          </Text>
        ) : (
          <></>
        )}
        <View style={styles.box}>
          <Text style={styles.text}>비밀번호 확인</Text>
          <TextInput
            style={styles.input}
            placeholder="비밀번호를 한 번 더 입력해주세요"
            placeholderTextColor={'#C5CCD4'}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>
        {duplicate ? (
          <Text style={styles.valid}>비밀번호가 일치하지 않습니다.</Text>
        ) : (
          <></>
        )}
        <View style={styles.box}>
          <Text style={styles.text}>닉네임</Text>
          <View style={styles.duplicationBox}>
            <TextInput
              style={styles.nicknameInput}
              placeholder="최대 8자를 입력해주세요"
              placeholderTextColor={'#C5CCD4'}
              value={nickname}
              onChangeText={setNickname}
            />
            <Pressable
              style={styles.duplicationBtn}
              onPress={onPressDuplication}>
              <Text style={styles.sendBtnText}>중복확인</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <LoginButton name="다음" send={true} onPress={onPressSignUp} />
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
  top: {
    position: 'absolute',
    width: 375,
    height: 120,
    top: 30,
    paddingHorizontal: 30,
  },
  box: {
    width: '100%',
    height: 71,
    marginBottom: 22.5,
  },
  duplicationBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
    color: '#484F58',
    marginBottom: 2,
    height: 23,
  },
  input: {
    borderColor: '#C5CCD4',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '700',
  },
  nicknameInput: {
    borderColor: '#C5CCD4',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '700',
    width: 229,
  },
  sendBtn: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#32E7DC',
    width: 315,
    height: 39,
    marginTop: 10,
  },
  duplicationBtn: {
    backgroundColor: '#32E7DC',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  sendBtnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },

  sendedBtnText: {
    color: '#32E7DC',
    fontSize: 15,
    fontWeight: '700',
  },

  bottom: {
    position: 'absolute',
    width: 375,
    height: 120,
    bottom: 0,
    paddingHorizontal: 30,
  },
  valid: {
    color: '#CA2323',
    fontSize: 10,
    fontWeight: '400',
    marginTop: -20,
    marginBottom: 20,
  },
});

export default SignUpNextScreen;
