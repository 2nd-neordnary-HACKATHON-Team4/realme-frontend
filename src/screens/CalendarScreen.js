import React, {useContext, useEffect, useState} from 'react';
import {format} from 'date-fns';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import colors from '../constants/color';

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
        <View style={styles.outBox}>
          <Calendar
            style={styles.calendar}
            markedDates={markedSelectedDates}
            theme={{
              selectedDayBackgroundColor: colors.blue_dark,
              dotColor: colors.blue_dark,
              todayTextColor: colors.blue_dark,
            }}
            monthFormat={'yyyy년 MM월'}
            onDayPress={day => {
              setSelectedDate(day.dateString);
            }}
          />
          {console.log(markedSelectedDates)}
          {/* <Text>{markedSelectedDates}</Text> */}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  outBox: {
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
