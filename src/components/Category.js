import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../constants/color';

const Category = ({text, width, height, isActive, handleIsActive}) => {
  if (isActive) {
    return (
      <TouchableOpacity
        onPress={handleIsActive}
        style={[styles.block, styles.backgroundActive]}>
        <Text style={[styles.text, styles.textActive]}>{text}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={handleIsActive}
        style={[styles.block, styles.backgroundInActive]}>
        <Text style={[styles.text, styles.textInActive]}>{text}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    width: 60,
    height: 28,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.blue_dark,
    borderRadius: 6,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  backgroundActive: {
    backgroundColor: colors.blue_dark,
  },
  backgroundInActive: {
    backgroundColor: colors.gray_white,
  },
  textActive: {
    color: colors.gray_white,
  },
  textInActive: {
    color: colors.blue_dark,
  },
});

export default Category;
