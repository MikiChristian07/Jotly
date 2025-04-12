import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const NoteItem = ({ note }) => {
  return (
     <View style={styles.noteItem}>
        <Text style={styles.noteTitle}>{note.title}</Text>
        <Text style={styles.noteContent}>{note.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
})

export default NoteItem;