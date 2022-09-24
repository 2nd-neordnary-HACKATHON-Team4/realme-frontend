import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './HomeScreen';
import onBoardingScreen from './onBoarding/OnBoardingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyPageScreen from './MyPageScreen';
import CalendarScreen from './CalendarScreen';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const RootRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/calendarIcon/calendar.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('../assets/images/homeIcon/home.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image source={require('../assets/images/personIcon/person.png')} />
          ),
        }}
      />
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
