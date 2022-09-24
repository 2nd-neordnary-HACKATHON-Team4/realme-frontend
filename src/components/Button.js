import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import colors from '../constants/color';

const Button = ({children, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.block, style]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  block: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.blue_dark,
    width: '100%',
    height: 57,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.gray_white,
  },
});

export default Button;
