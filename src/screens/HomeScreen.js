import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
