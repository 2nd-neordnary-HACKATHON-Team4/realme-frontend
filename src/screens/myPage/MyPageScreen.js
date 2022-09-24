import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Image,
  Button,
} from 'react-native';
import colors from '../../constants/color';
import HeartIcon from '../../assets/calendar/heart.png';
import colors from '../../constants/color';


const MyPageScreen = () => {
  return (
    <SafeAreaView>
      <Text>설정 해더 추후 추가</Text>

      <View style={styles.container}>
        <View style={styles.backGray}>
          <Image source={HeartIcon} />
          <View style={styles.center}>
            <Text style={styles.boldText}>홍길동</Text>
            <Text>안녕하세요 홍길동입니다.</Text>
          </View>
          <Button
            styles={styles.profileEditButton}
            title="프로필 수정"
            color="#gray"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  boldText: {fontWeight: 'bold', fontSize: 26},
  center: {alignItems: 'center'},
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backGray: {
    marginTop: 80,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: 350,
    height: 500,
  },
  profileEditButton: {
    width: 100,
    height: 40,
    backgroundColor: 'gray',
    color: 'red',
  },
  block: {
    flex: 1,
    backgroundColor: colors.gray_gray,
  },
});

export default MyPageScreen;
