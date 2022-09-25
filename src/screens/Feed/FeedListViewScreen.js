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
import Category from '../../components/Category';
import colors from '../../constants/color';
import {useNavigation} from '@react-navigation/native';
import ShadowEffect from '../../components/ShadowEffect';
import {axiosInstance} from '../../queries';
import {useRecoilState} from 'recoil';
import {categoryListState} from '../../atoms/category';
import {feedListState} from '../../atoms/feed';
import {format} from 'date-fns';

const FeedListViewScreen = () => {
  const navigation = useNavigation();
  const [isHeartPressed, setIsHeartPressed] = useState(false);
  const [isAllCategoryChecked, setIsAllCategoryChecked] = useState(false);
  const [categoryList, setCategoryList] = useRecoilState(categoryListState);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    const getCategoryList = () => {
      axiosInstance
        .get('/categories/list')
        .then(response => {
          setCategoryList(
            response.data.result.map(item => ({...item, isActive: false})),
          );
        })
        .catch(e => {
          console.log(e);
        });
    };
    getCategoryList();
  }, [setCategoryList]);

  const [feedList, setFeedList] = useRecoilState(feedListState);
  const getFeedList = () => {
    axiosInstance
      .get(`/categories?categoryIdx=${selectedCategory}`)
      .then(response => {
        if (response.data.isSuccess) {
          console.log(response.data.result);
          setFeedList(response.data.result);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getFeedList();
  }, [selectedCategory]);

  const onHeartPress = ({id}) => {
    feedList.map(feed => {
      if (feed.id === id) {
        axiosInstance
          .post(`/home/feed/${feed.id}/like`)
          .then(response => {
            console.log(response.data.result);
            setFeedList(
              feedList.map(feed =>
                feed.id === id
                  ? {
                      ...feed,
                      heartedPressed: response.data.result.heartedPressed,
                      likeCount: response.data.result.heartedPressed
                        ? feed.likeCount + 1
                        : feed.likeCount - 1,
                    }
                  : feed,
              ),
            );
          })
          .catch(e => {
            console.log(e);
          });
      }
    });
  };

  return (
    <SafeAreaView style={styles.block}>
      <StatusBar backgroundColor="white" />
      <View style={styles.categoryContainer}>
        <ScrollView horizontal={true} style={styles.categoryList}>
          <View style={styles.category}>
            <Category
              isActive={isAllCategoryChecked}
              onPress={() => {
                setIsAllCategoryChecked(prev => !prev);
                setCategoryList(
                  categoryList.map(category => ({
                    ...category,
                    isActive: false,
                  })),
                );
                setSelectedCategory(0);
              }}
              width={56}
              height={26}>
              전체
            </Category>
          </View>
          {categoryList.map((item, index) => {
            return (
              <View key={item.categoryIdx} style={styles.category}>
                <Category
                  isActive={item.isActive}
                  onPress={() => {
                    setIsAllCategoryChecked(false);
                    setCategoryList(
                      categoryList.map(category =>
                        category.categoryIdx === index + 1
                          ? {...category, isActive: true}
                          : {...category, isActive: false},
                      ),
                    );
                    setSelectedCategory(item.categoryIdx);
                  }}
                  width={56}
                  height={26}>
                  {item.categoryName}
                </Category>
              </View>
            );
          })}
          <View style={styles.categoryFooter} />
        </ScrollView>
        <View style={styles.categoryFooter} />
      </View>
      <FlatList
        style={styles.feedList}
        ListFooterComponent={<View style={styles.footer} />}
        data={feedList}
        renderItem={({item}) => (
          <View key={item.id} style={styles.feedItem}>
            <View style={styles.profile}>
              <Image
                source={require('../../assets/images/profileIcon/profile.png')}
              />
              <Text style={styles.username}>{item.userProtected.nickname}</Text>
            </View>
            <View>
              <View style={styles.titleContainer}>
                <View style={styles.itemCategory}>
                  <Text style={styles.categoryText}>
                    {item.categoryProtected.categoryName}
                  </Text>
                </View>
                <View>
                  <Text style={styles.titleText}>{item.title}</Text>
                </View>
              </View>
              <View style={styles.content}>
                <Text style={styles.contentText}>{item.contents}</Text>
              </View>
              <View style={styles.bottom}>
                <TouchableOpacity
                  style={styles.heart}
                  onPress={() => {
                    onHeartPress({id: item.id});
                  }}>
                  <View style={styles.heartImage}>
                    {item.heartedPressed ? (
                      <Image
                        source={require('../../assets/images/heartIcon/heart_active.png')}
                      />
                    ) : (
                      <Image
                        source={require('../../assets/images/heartIcon/heart.png')}
                      />
                    )}
                  </View>
                  <Text>{item.likeCount}개</Text>
                </TouchableOpacity>
                <Text>{format(new Date(), 'MM.dd')}</Text>
              </View>
            </View>
          </View>
        )}
      />
      <ShadowEffect
        shadowColor={colors.blue_dark}
        offset={{width: 4, height: 4}}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            navigation.navigate('FeedTagChoose');
          }}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </ShadowEffect>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: colors.gray_white,
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
    marginRight: 14,
  },
  categoryFooter: {
    width: 38,
    height: 54,
    backgroundColor: colors.gray_white,
  },
  feedList: {
    backgroundColor: colors.gray_light_gray,
    paddingVertical: 10,
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
    alignItems: 'center',
  },
  addButtonText: {
    color: colors.gray_white,
    fontSize: 49,
  },
  footer: {
    height: 80,
  },
});

export default FeedListViewScreen;
