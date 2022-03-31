import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/homeStack';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import { useState } from 'react';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <NavigationContainer>
        <HomeStack />
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

