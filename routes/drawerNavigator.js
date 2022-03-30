import { createDrawerNavigator} from '@react-navigation/drawer';
import About from '../screens/about';
import HomeStack from './homeStack';
import Home from '../screens/home';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{headerShown: true}}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    )
}