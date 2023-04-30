import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartingPage from './pages/starting';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    'BebasNeue': require('./assets/fonts/BebasNeue-Regular.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf')
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="startingPage" component={StartingPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
