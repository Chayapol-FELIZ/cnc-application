import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LobbyScreen, NcScreen, CncgreenScreen, CncblueScreen, ContentScreen } from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen
          name="Lobby"
          component={LobbyScreen}
          options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen
          name="Nc"
          component={NcScreen}
          options={{ animation: 'slide_from_right' }} />
        <Stack.Screen
          name="Cncgreen"
          component={CncgreenScreen}
          options={{ animation: 'slide_from_right' }} />
        <Stack.Screen
          name="Cncgblue"
          component={CncblueScreen}
          options={{ animation: 'slide_from_right' }} />
        <Stack.Screen
          name="Content"
          component={ContentScreen}
          options={{ animation: 'slide_from_right' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
