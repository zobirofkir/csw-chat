import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import HomeScreen from '../Screens/HomeScreen';
import Icon  from 'react-native-vector-icons/FontAwesome5';
import AboutScreen from '../Screens/AboutScreen';

const Drawer = createDrawerNavigator();
const NavigationScreen = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen}
          options={{
            drawerIcon: ({color}) =>(
              <Icon name='home' size={15} color={color}/>
            ),
            
          }}
        />
        <Drawer.Screen name='About Us' component={AboutScreen}
          options={{
            drawerIcon: ({color}) =>(
              <Icon name='user' size={15} color={color}/>
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  )
}

export default NavigationScreen