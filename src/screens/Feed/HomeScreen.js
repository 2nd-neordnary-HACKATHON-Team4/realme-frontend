import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedListViewScreen from './FeedListViewScreen';
import FeedTagChooseScreen from './FeedTagChooseScreen';
import {Text, TouchableOpacity} from 'react-native';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
