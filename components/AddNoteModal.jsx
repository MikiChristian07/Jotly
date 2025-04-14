import { 
    View, 
    Text, 
    TouchableOpacity,
    Modal,
    TextInput, 
    StyleSheet 
} from "react-native";

const AddNoteModal = ({

    modalVisible, 
    setModalVisible, 
    newNoteTitle, 
    setNewNoteTitle, 
    newNoteContent, 
    setNewNoteContent, 
    addNote

}) => {

  return (
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
  )
}

const styles = StyleSheet.create({
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
})

export default AddNoteModal