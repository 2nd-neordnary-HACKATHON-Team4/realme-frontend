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
  Touchable,
  TouchableOpacity,
} from 'react-native';
import colors from '../../constants/color';
import DefaultCircle from '../../assets/defaultCircle.png';
import SettingButton from '../../assets/setting.png';
import Arrow from '../../assets/myPage/leftArrow.png';
import {useNavigation} from '@react-navigation/native';

const MyPageScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text>
            <Image source={Arrow} style={styles.arrow} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}>
          <Image source={SettingButton} style={styles.settingBtn} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.backGray}>
          <Image source={DefaultCircle} style={styles.img} />
          <View style={styles.center}>
            <Text style={styles.boldText}>홍길동</Text>
            <Text>안녕하세요 홍길동입니다.</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  arrow: {
    width: 15,
    height: 13,
    marginTop: 20,
  },
  settingBtn: {
    width: 30,
    height: 30,
  },
  header: {
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: 150,
    height: 150,
    marginTop: -130,
  },
  boldText: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 26,
  },
  center: {alignItems: 'center'},
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backGray: {
    marginTop: 160,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: 350,
    height: 400,
  },
  profileEditButton: {
    width: 100,
    height: 40,
  },
  block: {
    flex: 1,
    backgroundColor: colors.gray_gray,
  },
});

export default MyPageScreen;
