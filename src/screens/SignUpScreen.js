import React, {useEffect, useRef, useState} from 'react';
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
  Animated,
  useWindowDimensions,
} from 'react-native';
import LoginButton from '../components/LoginButton';

function SignUpScreen({navigation, route}) {
  const [send, isSend] = useState(false);
  const [email, setEmail] = useState('');

  const onPressSend = () => {
    isSend(true);
  };

  const onPressNextButton = () => {
    navigation.push('SignUpNext', {email: email, setEmail: setEmail});
  };

  return (
    <SafeAreaView style={styles.fullscreen}>
      <View style={styles.top}>
        {/* input component */}
        <View style={styles.box}>
          <Text style={styles.text}>이메일</Text>
          <TextInput
            style={styles.input}
            placeholder="ex) aaa@naver.com"
            placeholderTextColor={'#C5CCD4'}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
        {send ? (
          <Pressable onPress={onPressSend} style={styles.sendedBtn}>
            <Text style={styles.sendedBtnText}>
              인증번호 전송(남은 횟수 x회)
            </Text>
          </Pressable>
        ) : (
          <Pressable onPress={onPressSend} style={styles.sendBtn}>
            <Text style={styles.sendBtnText}>인증번호 전송</Text>
          </Pressable>
        )}

        {send ? (
          <View style={styles.validationBox}>
            <Text style={styles.validationText}>인증번호 ?자리</Text>
            <View style={styles.validationContainer}>
              <TextInput style={styles.validationInput} />
              <Text style={styles.timer}>??분 ??초</Text>
            </View>

            <View style={styles.bar}></View>
            <Text style={styles.validationWarning}>
              인증번호는 입력한 이메일 주소로 발송됩니다.
            </Text>
            <Text style={styles.validationWarning}>
              수신하지 못했다면 스팸함 또는 해당 이메일 서비스의 설정을
              확인해주세요.
            </Text>
          </View>
        ) : (
          <Text style={styles.warning}>
            회원 가입시 ID는 반드시 본인 소유의 연락 가능한 이메일 주소를
            사용하여야 합니다.
          </Text>
        )}
      </View>
      {send ? (
        <View style={styles.bottom}>
          <LoginButton name="다음" send={send} onPress={onPressNextButton} />
        </View>
      ) : (
        <View style={styles.bottom}>
          <LoginButton name="다음" send={send} />
        </View>
      )}
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
  sendBtn: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#32E7DC',
    width: 315,
    height: 39,
    marginTop: 13.5,
  },
  sendBtnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
  sendedBtn: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderColor: '#32E7DC',
    borderWidth: 1,
    width: 315,
    height: 39,
    marginTop: 13.5,
  },
  sendedBtnText: {
    color: '#32E7DC',
    fontSize: 15,
    fontWeight: '700',
  },
  warning: {
    fontSize: 8,
    color: '#8B95A1',
    fontWeight: '700',
    marginTop: 10,
  },
  bottom: {
    position: 'absolute',
    width: 375,
    height: 120,
    bottom: 0,
    paddingHorizontal: 30,
  },
  validationBox: {
    marginTop: 30,
  },
  validationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timer: {
    fontSize: 15,
    fontWeight: '700',
  },
  validationText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#A8A8A8',
  },
  validationWarning: {
    fontSize: 8,
    color: '#8B95A1',
    fontWeight: '700',
  },
  bar: {
    width: 315,
    height: 1,
    backgroundColor: '#000000',
    marginBottom: 10,
  },
});

export default SignUpScreen;
