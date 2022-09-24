import React from 'react';
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
import SignUpInput from '../components/SignUpInput';

function SignUpScreen() {
  return (
    <SafeAreaView style={styles.fullscreen}>
      <View style={styles.top}>
        <View style={styles.box}>
          <Text style={styles.text}>이메일</Text>
          <TextInput style={styles.input} />
        </View>
        <Pressable onPress={() => {}}>
          <Text style={styles.sendBtn}>회원가입하기</Text>
        </Pressable>
      </View>
      <View style={styles.bottom}>
        <Text>버튼</Text>
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
    width: 312,
    height: 120,
    top: 43,
  },
  box: {
    width: 312,
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
  },
  sendBtn: {},
  bottom: {},
});

export default SignUpScreen;
