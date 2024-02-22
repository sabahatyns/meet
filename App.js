import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Video from './screens/room';
import Home from './screens/meet';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer  >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="home"
          component={Home}
          Options={{ headerShown: false }}
        />
        <Stack.Screen
          name="room"
          component={Video}
          Options={{ headerShown: false }}
        />
      
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}
