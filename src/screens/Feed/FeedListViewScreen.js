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
import Category from '../../components/Category';
import colors from '../../constants/color';
import {useNavigation} from '@react-navigation/native';

const FeedListViewScreen = () => {
  const navigation = useNavigation();
  const [isHeartPressed, setIsHeartPressed] = useState(false);
  const [categoryList, setCategoryList] = useState([
    {
      name: '집순이',
      isActive: true,
    },
    {
      name: '요리사',
      isActive: false,
    },
    {
      name: '회사원',
      isActive: false,
    },
    {
      name: '대학생',
      isActive: true,
    },
    {
      name: '알바생',
      isActive: true,
    },
    {
      name: '집순이',
      isActive: true,
    },
    {
      name: '집순이',
      isActive: true,
    },
    {
      name: '집순이',
      isActive: true,
    },
    {
      name: '집순이',
      isActive: true,
    },
  ]);

  const [feedList, setFeedList] = useState([
    {
      id: 0,
      username: '홍길동',
      category: '카테고리',
      title: '제목(오늘은 내가 요리사)',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egeneque diam massa diam. Ut orci non egestas in velit consecteturmalesuada diam nisl.',
      heartNum: 3,
      date: '1일 전',
    },
    {
      id: 1,
      username: '홍길동',
      category: '카테고리',
      title: '제목(오늘은 내가 요리사)',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egeneque diam massa diam. Ut orci non egestas in velit consecteturmalesuada diam nisl.',
      heartNum: 2,
      date: '1일 전',
    },
    {
      id: 2,
      username: '홍길동',
      category: '카테고리',
      title: '제목(오늘은 내가 요리사)',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egeneque diam massa diam. Ut orci non egestas in velit consecteturmalesuada diam nisl.',
      heartNum: 2,
      date: '1일 전',
    },
    {
      id: 3,
      username: '홍길동',
      category: '카테고리',
      title: '제목(오늘은 내가 요리사)',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egeneque diam massa diam. Ut orci non egestas in velit consecteturmalesuada diam nisl.',
      heartNum: 2,
      date: '1일 전',
    },
    {
      id: 4,
      username: '홍길동',
      category: '카테고리',
      title: '제목(오늘은 내가 요리사)',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egeneque diam massa diam. Ut orci non egestas in velit consecteturmalesuada diam nisl.',
      heartNum: 2,
      date: '1일 전',
    },
    {
      id: 5,
      username: '홍길동',
      category: '카테고리',
      title: '제목(오늘은 내가 요리사)',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egeneque diam massa diam. Ut orci non egestas in velit consecteturmalesuada diam nisl.',
      heartNum: 2,
      date: '1일 전',
    },
  ]);
  return (
    <SafeAreaView style={styles.block}>
      <StatusBar backgroundColor="white" />
      <ScrollView horizontal={true} style={styles.categoryList}>
        {categoryList.map((item, index) => {
          return (
            <View key={index} style={styles.category}>
              <Category text={item.name} isActive={item.isActive} />
            </View>
          );
        })}
      </ScrollView>
      <FlatList
        style={styles.feedList}
        // ListFooterComponent={<View style={styles.footer} />}
        data={feedList}
        renderItem={({item}) => (
          <View key={item.id} style={styles.feedItem}>
            <View style={styles.profile}>
              <Image
                source={require('../../assets/images/profileIcon/profile.png')}
              />
              <Text style={styles.username}>{item.username}</Text>
            </View>
            <View>
              <View style={styles.titleContainer}>
                <View style={styles.itemCategory}>
                  <Text style={styles.categoryText}>{item.category}</Text>
                </View>
                <View>
                  <Text style={styles.titleText}>{item.title}</Text>
                </View>
              </View>
              <View style={styles.content}>
                <Text style={styles.contentText}>{item.content}</Text>
              </View>
              <View style={styles.bottom}>
                <TouchableOpacity
                  style={styles.heart}
                  onPress={() => {
                    setIsHeartPressed(prev => !prev);
                  }}>
                  <View style={styles.heartImage}>
                    {isHeartPressed ? (
                      <Image
                        source={require('../../assets/images/heartIcon/heart_active.png')}
                      />
                    ) : (
                      <Image
                        source={require('../../assets/images/heartIcon/heart.png')}
                      />
                    )}
                  </View>
                  <Text>{item.heartNum}개</Text>
                </TouchableOpacity>
                <Text>{item.date}</Text>
              </View>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate('FeedTagChoose');
        }}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  categoryList: {
    height: 54,
    backgroundColor: colors.gray_white,
    marginBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 40,
    paddingVertical: 8,
  },
  category: {
    height: 28,
    marginRight: 14,
  },
  feedItem: {
    backgroundColor: colors.gray_white,
    borderRadius: 10,
    marginHorizontal: 18,
    padding: 20,
    marginBottom: 10,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 8,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  itemCategory: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 16,
    borderColor: colors.blue_dark,
    borderWidth: 0.5,
    borderRadius: 4,
    marginBottom: 10,
    marginRight: 6,
    paddingHorizontal: 7,
  },
  categoryText: {
    fontSize: 8,
    fontWeight: 'bold',
    color: colors.blue_dark,
  },
  titleText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  content: {
    marginBottom: 7,
  },
  contentText: {
    color: colors.gray_dark_gray,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartImage: {
    marginRight: 8,
  },
  addButton: {
    position: 'absolute',
    bottom: 6,
    marginHorizontal: 163,
    backgroundColor: colors.blue_dark,
    width: 65,
    height: 65,
    borderRadius: 32.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: colors.gray_white,
    fontSize: 50,
  },
});

export default FeedListViewScreen;
