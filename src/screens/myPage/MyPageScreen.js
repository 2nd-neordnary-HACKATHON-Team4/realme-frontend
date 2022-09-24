import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const MyPageScreen = () => {
  return (
    <SafeAreaView>
      <Text>MyPage</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default MyPageScreen;
