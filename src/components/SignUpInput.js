import React from 'react';
import {StyleSheet, TextInput, View, Text, SafeAreaView} from 'react-native';

function SignUpInput() {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>이메일</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 375,
    height: 71,
  },
  text: {
    fontSize: 15,
    fontWeight: 700,
    color: '#484F58',
  },
  input: {
    backgroundColor: 'red',
  },
});

export default SignUpInput;
