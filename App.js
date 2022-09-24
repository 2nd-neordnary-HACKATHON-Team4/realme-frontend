import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoardingRoutes, RootRoutes} from './src/screens/Routes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Root">
        <Stack.Screen name="Root" component={RootRoutes} />
        <Stack.Screen name="OnBoarding" component={OnBoardingRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
