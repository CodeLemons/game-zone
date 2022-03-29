import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ReviewDetails from './screens/reviewDetails';
import AppLoading from 'expo-app-loading';
import Home from './screens/home';
import * as Font from 'expo-font';
import { useState } from 'react';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home" 
            component={Home} 
            options={{ title: 'GameZone' }}
          />
          <Stack.Screen
            name="ReviewDetails" 
            component={ReviewDetails}
            options={{ title: 'Review Details' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log('error')}
      />
    )
  }
}

