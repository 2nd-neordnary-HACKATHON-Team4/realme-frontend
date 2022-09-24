import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../../constants/color';
import Category from '../../components/Category';
import Button from '../../components/Button';

const FeedTagChooseScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryList, setCategoryList] = useState([
    {
      id: 0,
      name: '집순이',
      isActive: false,
    },
    {
      id: 1,
      name: '요리사',
      isActive: false,
    },
    {
      id: 2,
      name: '회사원',
      isActive: false,
    },
    {
      id: 3,
      name: '대학생',
      isActive: true,
    },
    {
      id: 4,
      name: '알바생',
      isActive: true,
    },
    {
      id: 5,
      name: '집순이',
      isActive: true,
    },
    {
      id: 6,
      name: '집순이',
      isActive: true,
    },
    {
      id: 7,
      name: '집순이',
      isActive: true,
    },
    {
      id: 8,
      name: '집순이',
      isActive: true,
    },
    {
      id: 9,
      name: '집순이',
      isActive: true,
    },
    {
      id: 10,
      name: '집순이',
      isActive: false,
    },
    {
      id: 11,
      name: '집순이',
      isActive: true,
    },
    {
      id: 12,
      name: '집순이',
      isActive: true,
    },
    {
      id: 13,
      name: '집순이',
      isActive: true,
    },
    {
      id: 14,
      name: '집순이',
      isActive: true,
    },
    {
      id: 15,
      name: '집순이',
      isActive: true,
    },
    {
      id: 16,
      name: '집순이',
      isActive: true,
    },
    {
      id: 17,
      name: '집순이',
      isActive: true,
    },
  ]);

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
          <FlatList
            style={styles.categoryContainer}
            data={categoryList}
            renderItem={item => (
              <View style={styles.categoryWrapper}>
                <Category
                  key={item.item.id}
                  isActive={item.item.isActive}
                  onPress={() => {
                    setSelectedCategory(item.item.name);
                    console.log(item.item.name);
                  }}
                  width={71}
                  height={38}
                  fontSize={17}>
                  {item.item.name}
                </Category>
              </View>
            )}
            numColumns={3}
            keyExtractor={item => item.id}
          />
          <Button
            style={styles.writeButton}
            onPress={() => {
              navigation.navigate('FeedWriteView', {
                selectedCategory: selectedCategory,
              });
            }}>
            작성하기
          </Button>
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
    paddingTop: 12,
    paddingHorizontal: 19,
    marginHorizontal: 9,
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
  categoryContainer: {
    marginHorizontal: 23,
    marginTop: 30,
  },
  categoryWrapper: {
    marginBottom: 11,
    width: '33%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  writeButton: {
    marginTop: 47,
    marginBottom: 80,
  },
});

export default FeedTagChooseScreen;
