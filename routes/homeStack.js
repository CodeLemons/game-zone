import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewDetails from '../screens/reviewDetails';
import DrawerNavigator from './drawerNavigator';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={DrawerNavigator} options={{headerShown: false}}/>
          <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        </Stack.Navigator> 
    )
}