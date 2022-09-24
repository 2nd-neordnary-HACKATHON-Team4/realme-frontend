import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
} from 'react-native';
import colors from '../../constants/color';

const MyPageScreen = () => {
  return (
    <SafeAreaView>
      <Text>설정 해더 추후 추가</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: colors.gray_gray,
  },
});

export default MyPageScreen;
