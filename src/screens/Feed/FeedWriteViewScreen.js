import React, {useState} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import colors from '../../constants/color';
import Category from '../../components/Category';
import Button from '../../components/Button';
import {axiosInstance} from '../../queries';

const FeedWriteViewScreen = ({route, navigation}) => {
  const {selectedCategory} = route.params;
  const [picture, setPicture] = useState({uri: ''});
  const [newFeed, setNewFeed] = useState({
    categoryIdx: 0,
    contents: '',
    imgUrl: 'ewfwe',
    title: '',
  });
  const postFeed = () => {
    axiosInstance
      .post('/home/feeds', {
        categoryIdx: 1,
        contents: newFeed.contents,
        imgUrl: newFeed.imgUrl,
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'android',
      },
      res => {
        if (res.didCancel) {
          return;
        }
        if (res.assets) {
          setPicture({uri: res?.assets[0]?.uri});
          setNewFeed({
            ...newFeed,
            imgUrl: res?.assets[0]?.uri,
          });
          console.log(res?.assets[0]?.uri);
          const formData = new FormData();
          formData.append('file', {
            uri: res?.assets[0]?.uri,
            name: res?.assets[0]?.fileName,
          });
          // axiosInstance
          //   .put('/members/profile', formData, {
          //     headers: {
          //       'Content-Type': 'multipart/form-data',
          //     },
          //   })
          //   .then(response => {
          //     // console.log(response.data);
          //   })
          //   .catch(e => {
          //     console.log(e);
          //   });
        }
      },
    );
  };
  return (
    <SafeAreaView style={styles.block}>
      <StatusBar backgroundColor="white" />
      <View style={styles.block}>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryWrapper}>
            <Category
              onPress={() => {}}
              isActive
              width={54}
              height={26}
              fontSize={12}>
              {selectedCategory}
            </Category>
          </View>
        </View>
        <ScrollView style={styles.formContainer}>
          <View style={styles.formItemContainer}>
            <Text style={styles.titleText}>제목</Text>
            <TextInput
              value={newFeed.title}
              onChange={e => {
                setNewFeed({
                  ...newFeed,
                  title: e.nativeEvent.text,
                });
              }}
              style={[styles.titleInput, styles.input]}
              placeholder="제목을 입력하세요"
            />
          </View>
          <View style={styles.formItemContainer}>
            <Text style={styles.titleText}>사진(최대 1장)</Text>
            <TouchableOpacity
              onPress={onSelectImage}
              style={[styles.pictureInput, styles.input]}>
              {picture.uri === '' ? (
                <Image
                  source={require('../../assets/images/cameraIcon/camera.png')}
                />
              ) : (
                <Image
                  resizeMode="contain"
                  style={styles.picture}
                  source={{uri: picture.uri}}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.formItemContainer}>
            <Text style={styles.titleText}>내용</Text>
            <TextInput
              value={newFeed.contents}
              onChange={e => {
                setNewFeed({
                  ...newFeed,
                  contents: e.nativeEvent.text,
                });
              }}
              style={[styles.contentInput, styles.input]}
              placeholder="내용을 입력하세요"
            />
            <Text>{newFeed.contents}</Text>
          </View>
          <Button
            onPress={() => {
              postFeed();
            }}
            style={styles.writeButton}>
            작성하기
          </Button>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingHorizontal: 16,
  },
  categoryContainer: {
    height: 46,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  categoryWrapper: {
    height: 26,
  },
  input: {
    backgroundColor: colors.gray_white,
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 17,
    fontWeight: 'bold',
  },
  formItemContainer: {
    marginBottom: 20,
  },
  titleInput: {
    height: 66,
  },
  titleText: {
    fontSize: 17,
    marginBottom: 8,
  },
  pictureContainer: {},
  picture: {
    width: '100%',
    height: 169,
  },
  pictureInput: {
    height: 169,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentInput: {
    height: 255,
  },
  writeButton: {
    marginTop: 30,
    marginBottom: 24,
  },
});

export default FeedWriteViewScreen;
