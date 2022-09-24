import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../../constants/color';

const FeedWriteViewScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.block}>
      <StatusBar backgroundColor="white" />
      <View style={styles.block}>
        <Text>FeedWriteViewScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedWriteViewScreen;
