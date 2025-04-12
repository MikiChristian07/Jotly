import React from 'react'
import { View, FlatList } from 'react-native'
import NoteItem from './NoteItem'

const NoteList = ({ notes }) => {
  return (
    <View>
        <FlatList
            data={notes}
            keyExtractor={(item) => item.id.toString()} // Convert id to string
            renderItem={({ item }) => 
               <NoteItem note={item} />
            }
        />
    </View>
  );
};

export default NoteList;