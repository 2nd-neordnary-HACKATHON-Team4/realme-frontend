import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './HomeScreen';
import onBoardingScreen from './onBoarding/OnBoardingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyPageScreen from './MyPageScreen';
import CalendarScreen from './CalendarScreen';
import LoginScreen from './LogInScreen';
import SignUpScreen from './SignUpScreen';

const Tab = createBottomTabNavigator();

const RootRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
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

const LogInStack = createNativeStackNavigator();

const LoginRoutes = () => {
  return (
    <LogInStack.Navigator>
      <LogInStack.Screen
        name="LogIn"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <LogInStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: '회원가입(1/2)',
          headerTitleStyle: {color: 'black', fontWeight: 'bold'},
          headerTintColor: '#62F6EE',
        }}
      />
    </LogInStack.Navigator>
  );
};

export {RootRoutes, OnBoardingRoutes, LoginRoutes};
