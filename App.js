import React from 'react';
import NavigationScreen from './src/Navigations/NavigationScreen';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
        <NavigationScreen />
    </NavigationContainer>

  );
}

