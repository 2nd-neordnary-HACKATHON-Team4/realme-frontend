import React, {useEffect, useState} from 'react';
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
import {axiosInstance} from '../../queries';
import {useRecoilState} from 'recoil';
import {categoryListState} from '../../atoms/category';

const FeedTagChooseScreen = () => {
  const navigation = useNavigation();
  const [categoryList, setCategoryList] = useRecoilState(categoryListState);
  const [selectedCategory, setSelectedCategory] = useState('');

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
            <Image
              source={require('../../assets/images/pincersIcon/pincers.png')}
            />
            <Text style={styles.titleText}>
              기록 글의 카테고리를 선택해주세요.
            </Text>
          </View>
          <FlatList
            style={styles.categoryContainer}
            data={categoryList}
            renderItem={item =>
              item.index % 2 !== 0 ? (
                <View style={[styles.categoryWrapper, styles.categoryWidth]}>
                  <Category
                    key={item.item.categoryIdx}
                    isActive={true}
                    onPress={() => {
                      setSelectedCategory(item.item.categoryName);
                      console.log(item.item.categoryName);
                    }}
                    width={71}
                    height={38}
                    fontSize={17}>
                    {item.item.categoryName}
                  </Category>
                </View>
              ) : (
                <View style={[styles.categoryWrapper]}>
                  <Category
                    key={item.item.categoryIdx}
                    isActive={true}
                    onPress={() => {
                      setSelectedCategory(item.item.categoryName);
                      console.log(item.item.categoryName);
                    }}
                    width={71}
                    height={38}
                    fontSize={17}>
                    {item.item.categoryName}
                  </Category>
                </View>
              )
            }
            numColumns={3}
            columnWrapperStyle={styles.row}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 17,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.gray_gray,
  },
  categoryContainer: {
    marginTop: 30,
  },
  categoryWidth: {
    width: 160,
    display: 'flex',
    alignItems: 'center',
    // backgroundColor: 'black',
  },
  categoryWrapper: {
    marginBottom: 11,
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  writeButton: {
    marginTop: 47,
    marginBottom: 80,
  },
});

export default FeedTagChooseScreen;
