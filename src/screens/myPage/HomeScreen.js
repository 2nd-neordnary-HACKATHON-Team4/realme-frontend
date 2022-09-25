import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyPageScreen from './MyPageScreen';
import SettingScreen from './SettingScreen';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="MyPageScreen">
        <Stack.Screen
          name="MyPageScreen"
          component={MyPageScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            headerTitle: '설정',
            headerBackTitle: '뒤로가기',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
