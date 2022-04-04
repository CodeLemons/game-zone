import { createDrawerNavigator} from '@react-navigation/drawer';
import About from '../screens/about';
import Home from '../screens/home';
import Header from '../shared/header';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{headerShown: true}}>
            <Drawer.Screen 
                name="Home" 
                component={Home}
                headerMode='float'
                options={{
                    headerTitle: (props) => <Header {...props}/>, 
                }}
                    
            />
            <Drawer.Screen 
                name="About" 
                component={About}
                headerMode='float' 
                options={{
                    headerTitle: (props) => <Header {...props}/>, 
                }}
            />
        </Drawer.Navigator>
    )
}