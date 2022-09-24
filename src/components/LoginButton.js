import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

function LoginButton({onPress, hasMarginBottom}) {
  return (
    <View
      style={[styles.block, styles.overflow, hasMarginBottom && styles.margin]}>
      <Pressable
        onPress={onPress}
        style={styles.wrapper}
        android_ripple={{
          color: '#62F6EE',
        }}>
        <Text style={styles.text}>로그인</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  overflow: {borderRadius: 4, overflow: 'hidden'},
  wrapper: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 128,
    paddingVertical: 14,
    backgroundColor: '#62F6EE',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },

  margin: {marginBottom: 8},
});

export default LoginButton;
