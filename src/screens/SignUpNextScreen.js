import React, {useState} from 'react';
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

function SignUpNextScreen({navigation, route}) {
  const [send, isSend] = useState(false);
  console.log(send);

  const onPressSend = () => {
    isSend(true);
  };

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
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>비밀번호 확인</Text>
          <TextInput
            style={styles.input}
            placeholder="비밀번호를 한 번 더 입력해주세요"
            placeholderTextColor={'#C5CCD4'}
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
            <TextInput style={styles.validationInput} />
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
          <LoginButton name="다음" send={send} />
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
    marginTop: 10,
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
    marginTop: 10,
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

export default SignUpNextScreen;
