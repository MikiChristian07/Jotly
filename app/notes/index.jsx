import { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const NoteScreen = () => {

    const [notes, setNotes] = useState([
        { id: 1, title: "Note 1", content: "This is the first note." },
        { id: 2, title: "Note 2", content: "This is the second note." },
        { id: 3, title: "Note 3", content: "This is the third note." },
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                data={notes}
                keyExtractor={(item) => item.id.toString()} // Convert id to string
                renderItem={({ item }) => (
                    <View style={styles.noteItem}>
                        <Text style={styles.noteTitle}>{item.title}</Text>
                        <Text style={styles.noteContent}>{item.content}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fcb4c3f",
    },
    noteItem: {
        backgroundColor: "#fff",
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    noteTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    noteContent: {
        fontSize: 16,
        color: "#6c757d",
    },
});

export default NoteScreen;