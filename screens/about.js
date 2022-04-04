import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text>Version 1.0.0</Text>
        </View>
    )
}