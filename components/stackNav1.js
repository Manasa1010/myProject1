import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import  CamNotes  from '../screens/camNotes';
import  ImageNotes from '../screens/imageNote';

export const AppStackNavigator = createStackNavigator(
  {
    Notes: {
      screen: CamNotes,
      navigationOptions: {
        headerShown: false,
      },
    },
    ImageNotes: { screen: ImageNotes },
  },
  { initialRouteName: 'Notes' }
);