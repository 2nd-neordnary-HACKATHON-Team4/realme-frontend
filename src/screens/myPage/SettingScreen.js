import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import colors from '../../constants/color';
import {useNavigation} from '@react-navigation/native';

const SettingScreen = () => {
  const [blockTimeLimit, setBlockTimeLimit] = useState(false);
  const [startTime, setStartTime] = useState('12:00');
  const [endTime, setEndTime] = useState('12:00');
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      {/* <Text>설정 해더 추후 추가</Text> */}
      <Button
        title="뒤로가기"
        style={styles.backBtn}
        onPress={() => navigation.pop()}
      />

      <View style={styles.mainWrap}>
        <View>
          <Text style={styles.title}>알림설정</Text>
          {!blockTimeLimit ? (
            <View style={[styles.element]}>
              <View style={styles.flexAttr}>
                <Text style={[styles.elementText, styles.blockTimeText]}>
                  방해금지 시간 설정
                </Text>
                <Switch
                  onValueChange={setBlockTimeLimit}
                  value={blockTimeLimit}
                  style={styles.switchColor}
                />
              </View>
            </View>
          ) : (
            <>
              <View style={[styles.element, styles.longView]}>
                <View style={styles.flexAttr}>
                  <Text style={[styles.elementText, styles.blockTimeText]}>
                    방해금지 시간 설정
                  </Text>
                  <Switch
                    onValueChange={setBlockTimeLimit}
                    value={blockTimeLimit}
                  />
                </View>
                <View>
                  <View style={[styles.flexAttr, styles.upPadding]}>
                    <Text>시작 시간</Text>
                    <TextInput
                      style={styles.timeText}
                      value={startTime}
                      onChange={setStartTime}
                    />
                  </View>
                  <View style={[styles.flexAttr, styles.upPadding]}>
                    <Text>종료 시간</Text>
                    <TextInput
                      style={styles.timeText}
                      value={endTime}
                      onChange={setEndTime}
                    />
                  </View>
                </View>
              </View>
            </>
          )}
        </View>
        <View>
          <Text style={styles.title}>이용안내</Text>
          <View style={styles.element}>
            <TouchableHighlight>
              <View>
                <Text style={styles.elementText}>공지사항</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.element}>
            <Text style={styles.elementText}>개인정보처리방침</Text>
          </View>
          <View style={styles.element}>
            <Text style={styles.elementText}>문의하기</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>계정</Text>
          <View style={styles.element}>
            <Text style={styles.elementText}>로그아웃</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    textAlign: 'left',
  },
  touchable: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  blockTimeText: {marginTop: 0},
  switchColor: {
    ios_backgroundColor: colors.blue_dark,
    thumbColor: colors.blue_dark,
    trackColor: {false: 'white', true: colors.blue_dark},
    top: -6,
  },
  timeText: {color: colors.blue_dark},
  upPadding: {paddingTop: 25},
  longView: {
    height: 160,
  },
  flexAttr: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },

  mainWrap: {
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 10,
  },
  element: {
    height: 60,

    // justifyContent: 'center',
    backgroundColor: 'white',
    // height: 40,
    // textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    marginBottom: 10,
    paddingBottom: 0,
    borderRadius: 10,
  },
  elementText: {
    fontWeight: '500',
    fontSize: 15,
    height: 40,
    color: colors.gray_dark_gray,
  },
  block: {
    flex: 1,
    backgroundColor: colors.gray_gray,
  },
});

export default SettingScreen;
