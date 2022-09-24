import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../../constants/color';

const FeedTagChooseScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.block}>
      <StatusBar backgroundColor="white" />
      <View style={styles.block}>
        <View style={styles.xButtonWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}
            style={styles.xButton}>
            <Image source={require('../../assets/images/xIcon/x.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              기록 글의 카테고리를 선택해주세요.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: colors.blue_dark,
  },
  xButtonWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingRight: 26.25,
    paddingTop: 10,
    marginBottom: 10,
  },
  xButton: {},
  contentContainer: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    height: '100%',
    borderRadius: 50,
    paddingTop: 10,
    paddingHorizontal: 19,
  },
  titleContainer: {
    height: 231,
    backgroundColor: colors.gray_white,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 41,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default FeedTagChooseScreen;
