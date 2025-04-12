import { useState } from "react";
import { 
    View, 
    Text, 
    FlatList, 
    TouchableOpacity,
    Modal,
    TextInput, 
    StyleSheet 
} from "react-native";

const NoteScreen = () => {

    const [notes, setNotes] = useState([
        { id: 1, title: "Note 1", content: "This is the first note." },
        { id: 2, title: "Note 2", content: "This is the second note." },
        { id: 3, title: "Note 3", content: "This is the third note." },
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [newNoteTitle, setNewNoteTitle] = useState("");
    const [newNoteContent, setNewNoteContent] = useState("");

    // Add New Note
    const addNote = () => {
        if (!newNoteTitle.trim() || !newNoteContent.trim()) {
            alert("Both title and content are required!");
            return;
        }

        setNotes((prevNotes) => [
            ...prevNotes, 
            { id: Date.now().toString(), title: newNoteTitle.trim(), content: newNoteContent.trim() }
        ]);

        setNewNoteTitle("");
        setNewNoteContent("");
        setModalVisible(false);
    };

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

            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addButtonText}>+ Add Note</Text>
            </TouchableOpacity>

            {/* Add Note Modal */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Add New Note</Text>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Enter note title"
                            placeholderTextColor={"#999"}
                            value={newNoteTitle}
                            onChangeText={setNewNoteTitle}
                        />
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Enter note content"
                            placeholderTextColor={"#999"}
                            value={newNoteContent}
                            onChangeText={setNewNoteContent}
                            multiline
                        />
                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity
                                style={styles.saveButton}
                                onPress={addNote}
                            >
                                <Text style={styles.saveButtonText}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
         // Fixed invalid hex color
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
    addButton: {
        backgroundColor: "#007bff",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },
    addButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "80%",
        backgroundColor: "#fff",
        padding: 20,
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
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        paddingBottom: 10,
    },
    modalInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    modalButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    saveButton: {
        backgroundColor: "#007bff",
        padding: 15,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
        alignItems: "center",
    },
    saveButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    cancelButton: {
        backgroundColor: "#ccc",
        padding: 15,
        borderRadius: 10,
        flex: 1,
        alignItems: "center",
    },
    cancelButtonText: {
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default NoteScreen;