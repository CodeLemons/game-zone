import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewDetails from '../screens/reviewDetails';
import DrawerNavigator from './drawerNavigator';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen 
            name="HomeStack" 
            component={DrawerNavigator} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="ReviewDetails" 
            component={ReviewDetails} 
            options={{headerStyle: {
              backgroundColor: '#ccc', 
              height: 100}}}
          />
        </Stack.Navigator> 
    )
}