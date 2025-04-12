import { View, Text, StyleSheet } from "react-native";

const NoteScreen = () => {
    return (
        <View style={StyleSheet.container}>
            <Text>Note Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f8f9fa",
    },
});

export default NoteScreen;