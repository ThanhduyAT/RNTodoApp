import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Account/Login';
import SignupScreen from '../screens/Account/SignUp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from '../screens/OnBoarding';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { RootStackParams } from '../models/app';

const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator<RootStackParams>();

const AuthStack = () => {
  let routeName: string;
  const [isFirstLaunch, setIsFirstLaunch] = useState<any>(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });

    return () => {
      isFirstLaunch;
    };
  }, [isFirstLaunch]);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }
  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
