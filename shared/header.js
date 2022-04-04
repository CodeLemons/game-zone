import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native-web';

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>GameZone</Text> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    },
    headerTitle: {
        flexDirection: 'row',
    }
});