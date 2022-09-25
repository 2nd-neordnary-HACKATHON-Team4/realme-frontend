import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './src/screens/Feed/HomeScreen';
import MyPageScreen from './src/screens/myPage/MyPageScreen';
import {OnBoardingRoutes, RootRoutes, LoginRoutes} from './src/screens/Routes';
import YourPageScreen from './src/screens/myPage/YourPageScreen';
import SettingScreen from './src/screens/myPage/SettingScreen';
import {RecoilRoot} from 'recoil';
import HomeScreen from './src/screens/Feed/HomeScreen';
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
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="LogIn">
          <Stack.Screen name="LogIn" component={LoginRoutes} />
          <Stack.Screen name="Root" component={RootRoutes} />
          <Stack.Screen name="OnBoarding" component={OnBoardingRoutes} />
          <Stack.Screen name="MyPageScreen" component={MyPageScreen} />
          <Stack.Screen name="YourPageScreen" component={YourPageScreen} />
          <Stack.Screen name="SettingScreen" component={SettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
