import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../constants/color';
import ShadowEffect from './ShadowEffect';

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
      <ShadowEffect
        shadowColor={colors.blue_dark}
        offset={{width: 0, height: 4}}
        style={styles({width, height}).block}>
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
      </ShadowEffect>
    );
  } else {
    return (
      <ShadowEffect
        shadowColor={colors.blue_dark}
        offset={{width: 0, height: 4}}
        style={styles({width, height}).block}>
        <TouchableOpacity
          onPress={onPress}
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
      </ShadowEffect>
    );
  }
};

const styles = ({width = 56, height = 26, fontSize = 13}) =>
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
