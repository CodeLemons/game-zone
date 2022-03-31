import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>GameZone</Text> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '114%',
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
});