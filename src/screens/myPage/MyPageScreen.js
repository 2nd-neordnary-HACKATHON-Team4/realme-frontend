import React, {useEffect, useState} from 'react';
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
import Axios from 'axios';

const MyPageScreen = () => {
  const navigation = useNavigation();
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    try {
      Axios.get('http://prod.sogogi.shop:9000/users', {
        headers: {
          'X-ACCESS-TOKEN':
            'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjoxNCwiaWF0IjoxNjY0MDYwMzQ0LCJleHAiOjE2NjQwNjI5MzZ9.Ysfi70HECaQr4Ythtn3VMxM2SyXwaz6ZbpQmxVqn0vQ',
        },
      }).then(res => {
        console.log(res.data);
        setApiData(res.data);
      });
    } catch (e) {
      console.log('error');
    }
  }, []);

  useEffect(() => {
    console.log(apiData);
  }, [apiData]);

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
            <Text style={styles.boldText}>
              {apiData.result
                ? apiData.result.nickname
                : '불러오기를 실패했습니다.'}
            </Text>
            <Text>
              {apiData.result
                ? apiData.result.introduce
                : '불러오기를 실패했습니다.'}
            </Text>
          </View>
          <Button
            styles={styles.profileEditButton}
            title="프로필 수정"
            color={colors.blue_dark}
          />
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
    marginTop: 120,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: 350,
    height: 440,
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
