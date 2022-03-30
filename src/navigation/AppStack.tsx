import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import FolderDetail from '../screens/FolderDetail';
import NoteDetail from '../screens/NoteDetail';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitle: '', headerTransparent: true}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FolderDetail" component={FolderDetail} />
      <Stack.Screen name="NoteDetail" component={NoteDetail} />
    </Stack.Navigator>
  );
};

export default AppStack;
