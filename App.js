import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './src/screens/Feed/HomeScreen';
import MyPageScreen from './src/screens/myPage/MyPageScreen';
import {OnBoardingRoutes, RootRoutes, LoginRoutes} from './src/screens/Routes';
import YourPageScreen from './src/screens/myPage/YourPageScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="YourPageScreen">
        <Stack.Screen name="LogIn" component={LoginRoutes} />
        <Stack.Screen name="Root" component={RootRoutes} />
        <Stack.Screen name="OnBoarding" component={OnBoardingRoutes} />
        <Stack.Screen name="MyPageScreen" component={MyPageScreen} />
        <Stack.Screen name="YourPageScreen" component={YourPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
