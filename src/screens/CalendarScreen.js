import React, {useContext, useEffect, useState} from 'react';
import {format} from 'date-fns';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';
import colors from '../constants/color';

LocaleConfig.defaultLocale = 'kr';

function CalendarScreen() {
  const [pickContent, setPickContent] = useState('');
  const posts = [
    {
      id: 1,
      title: '제목입니다.',
      contents: '내용입니다.',
      date: '2022-09-26',
    },
    {
      id: 2,
      title: '제목입니다.',
      contents: '내용입니다.',
      date: '2022-02-27',
    },
  ];
  const markedDates = posts.reduce((acc, current) => {
    console.log(current);

    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  return (
    <>
      {/* <SafeAreaView style={{flex: 0, backgroundColor: 'white'}} /> */}

      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Calendar
            style={styles.calendar}
            markedDates={markedSelectedDates}
            theme={{
              selectedDayBackgroundColor: colors.blue_dark,
              dotColor: colors.blue_dark,
              todayTextColor: colors.blue_dark,
              arrowColor: colors.blue_dark,
            }}
            monthFormat={'yyyy년 MM월'}
            onDayPress={day => {
              setSelectedDate(day.dateString);
            }}
          />
          <View id="Content" style={mainWrapstyles.container}>
            <View style={mainWrapstyles.contentBox}>
              <Text style={mainWrapstyles.titleWrap}>
                <View style={mainWrapstyles.cyanBox}>
                  <Text style={mainWrapstyles.cyanText}>카테고리</Text>
                </View>
                <View>
                  <Text style={mainWrapstyles.titleText}>
                    제목(오늘은 내가 요리사)
                  </Text>
                </View>
              </Text>
              <View>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  neque diam massa diam. Ut orci non egestas in velit
                  consectetur malesuada diam nisl.
                </Text>

                <View style={mainWrapstyles.heart}>
                  <Text>💜</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
const mainWrapstyles = StyleSheet.create({
  heart: {
    // paddingTop: 100,
    marginTop: 10,
  },
  titleWrap: {
    paddingBottom: 10,
  },
  titleText: {
    paddingLeft: 10,

    fontWeight: 'bold',
    fontSize: 16,
  },
  cyanBox: {
    marginBottom: 0,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomColor: colors.blue_dark,
    borderTopColor: colors.blue_dark,
    borderRightColor: colors.blue_dark,
    borderLeftColor: colors.blue_dark,
    borderRadius: 4,
    backgroundColor: 'white',
    paddingBottom: 4,
    paddingTop: 4,
    paddingRight: 4,
    paddingLeft: 4,
  },
  cyanText: {
    color: colors.blue_dark,
    fontSize: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentBox: {
    width: 360,

    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 10,
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  calendar: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 30,

    borderBottomColor: colors.gray_light_gray,
    paddingLeft: 20,
    borderTopWidth: 1,
    borderTopColor: colors.gray_light_gray,
    paddingRight: 20,
    marginTop: 30,
    paddingTop: 10,
    backgroundColor: 'white',
  },
});

export default CalendarScreen;

LocaleConfig.locales['kr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
