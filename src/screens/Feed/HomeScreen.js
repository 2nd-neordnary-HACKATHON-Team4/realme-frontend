import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedListViewScreen from './FeedListViewScreen';
import FeedTagChooseScreen from './FeedTagChooseScreen';
import FeedWriteViewScreen from './FeedWriteViewScreen';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="FeedListView">
        <Stack.Screen
          name="FeedListView"
          component={FeedListViewScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FeedTagChoose"
          component={FeedTagChooseScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FeedWriteView"
          component={FeedWriteViewScreen}
          options={{
            headerTitle: '작성하기',
            headerBackTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
