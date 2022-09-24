import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './HomeScreen';
import onBoardingScreen from './onBoarding/OnBoardingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyPageScreen from './MyPageScreen';
import CalendarScreen from './CalendarScreen';

const Tab = createBottomTabNavigator();

const RootRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="MyPage" component={MyPageScreen} />
    </Tab.Navigator>
  );
};

const OnBoardingStack = createNativeStackNavigator();

const OnBoardingRoutes = () => {
  return (
    <OnBoardingStack.Navigator>
      <OnBoardingStack.Screen name="onBoarding" component={onBoardingScreen} />
    </OnBoardingStack.Navigator>
  );
};

export {RootRoutes, OnBoardingRoutes};
