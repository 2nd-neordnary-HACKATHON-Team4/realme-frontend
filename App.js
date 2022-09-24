import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Feed/HomeScreen';
import MyPageScreen from './src/screens/MyPageScreen';
import {OnBoardingRoutes, RootRoutes, LoginRoutes} from './src/screens/Routes';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000); //스플래시 활성화 시간 2초
    } catch (e) {
      console.log(e.message);
    }
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Root">
        <Stack.Screen name="LogIn" component={LoginRoutes} />
        <Stack.Screen name="Root" component={RootRoutes} />
        <Stack.Screen name="OnBoarding" component={OnBoardingRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
