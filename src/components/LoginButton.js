import React from 'react';
import {StyleSheet, Text, View, Pressable, Platform} from 'react-native';

function LoginButton({onPress, hasMarginBottom, name, send}) {
  return (
    <View style={[hasMarginBottom && styles.margin]}>
      <Pressable
        onPress={onPress}
        style={[styles.wrapper, send && styles.sendWrapper]}
        android_ripple={{
          color: '#62F6EE',
        }}>
        <Text style={styles.text}>{name}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 128,
    paddingVertical: 14,
    backgroundColor: '#F2F1F6',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  sendWrapper: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 128,
    paddingVertical: 14,
    backgroundColor: '#62F6EE',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(98, 246, 238, 0.32)',
        shadowOpacity: 0.32,
        shadowRadius: 5,
        shadowOffset: {
          height: -3,
          width: 11,
        },
      },
      android: {
        elevation: 1,
      },
    }),
  },

  margin: {marginBottom: 8},
});

export default LoginButton;
