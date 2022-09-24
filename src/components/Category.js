import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../constants/color';

const Category = ({
  children,
  onPress,
  width,
  height,
  isActive,
  handleIsActive,
  fontSize,
}) => {
  if (isActive) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles({width, height}).block,
          styles({width, height}).backgroundActive,
        ]}>
        <Text
          style={[
            styles({width, height, fontSize}).text,
            styles({width, height}).textActive,
          ]}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={handleIsActive}
        style={[
          styles({width, height}).block,
          styles({width, height}).backgroundInActive,
        ]}>
        <Text
          style={[
            styles({width, height, fontSize}).text,
            styles({width, height}).textInActive,
          ]}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
};

const styles = ({width, height, fontSize = 13}) =>
  StyleSheet.create({
    block: {
      flex: 1,
      width: width,
      height: height,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'rgba(50,231,220,0.5)',
      borderRadius: 6,
    },
    text: {
      fontSize: fontSize,
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
