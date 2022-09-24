import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './Feed/HomeScreen';
import onBoardingScreen from './onBoarding/OnBoardingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyPageScreen from './MyPageScreen';
import CalendarScreen from './CalendarScreen';
import LoginScreen from './LogInScreen';
import SignUpScreen from './SignUpScreen';
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
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../assets/images/calendarIcon/calendar_active.png')}
              />
            ) : (
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
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../assets/images/homeIcon/home_active.png')}
              />
            ) : (
              <Image source={require('../assets/images/homeIcon/home.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../assets/images/personIcon/person_active.png')}
              />
            ) : (
              <Image
                source={require('../assets/images/personIcon/person.png')}
              />
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
