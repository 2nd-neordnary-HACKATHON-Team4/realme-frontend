import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoardingRoutes, RootRoutes, LoginRoutes} from './src/screens/Routes';
import {RecoilRoot} from 'recoil';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
};

export default App;
