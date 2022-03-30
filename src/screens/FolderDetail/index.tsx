import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchBar from '../../components/SearchBar ';
import styles from './styles';
import RoundIconBtn from '../../components/RoundIconBtn';
import NoteInputModal from '../../components/NoteInputModel';
import Note from '../../components/Note';
import uuid from 'react-native-uuid';
import firestore from '@react-native-firebase/firestore';
import NotFound from '../../components/NotFound';

interface Note {
  id: string;
  title: string;
  desc: string;
  time: number;
}

const FolderDetail = ({route, navigation}: any) => {
  const {name, id} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [resultNotFound, setResultNotFound] = useState<boolean>(false);
  const ref = firestore().collection('folders');

  const handleOnSubmit = async (title: string, desc: string) => {
    let noteId: string = `${uuid.v4()}`;
    const newNote: Note = {id: noteId, title, desc, time: Date.now()};
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    ref.doc(id).collection(name).doc(`${noteId}`).set(newNote);
  };

  const openNote = (note: any) => {
    navigation.navigate('NoteDetail', {note, id, name});
  };

  const handleOnSearchInput = (text: string) => {
    setSearchQuery(text);
    if (!text.trim()) {
      setSearchQuery('');
      setResultNotFound(false);
    }
  };

  useEffect(() => {
    return ref
      .doc(id)
      .collection(name)
      .onSnapshot(querySnapshot => {
        const list: Note[] = [];
        querySnapshot.forEach(doc => {
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const {id, title, desc, time} = doc.data();
          list.push({
            id: id,
            title: title,
            desc: desc,
            time: time,
          });
        });

        let filteredNotes: Note[] = list.filter(note => {
          if (
            note.title.toLowerCase().includes(searchQuery.toLowerCase())
            // note.desc.toLowerCase().includes(text.toLowerCase())
          ) {
            return note;
          }
        });

        if (filteredNotes.length) {
          setNotes([...filteredNotes]);
        } else {
          setNotes([]);
        }
        if (loading) {
          setLoading(false);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const handleOnClear = async () => {
    setSearchQuery('');
    setResultNotFound(false);
  };

  if (loading) {
    return null; // or a spinner
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textHeader}>{name}</Text>
        {notes.length || searchQuery ? (
          <SearchBar
            value={searchQuery}
            onChangeText={handleOnSearchInput}
            onClear={handleOnClear}
          />
        ) : null}
        <FlatList
          data={notes}
          numColumns={2}
          columnWrapperStyle={styles.flatListContainer}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Note item={item} onPress={() => openNote(item)} />
          )}
        />
        {!notes.length ? (
          <View
            style={[
              styles.emptyHeaderContainer,
              StyleSheet.absoluteFillObject,
            ]}>
            <Text style={styles.emptyHeader}>Add Notes</Text>
          </View>
        ) : null}
      </View>
      <RoundIconBtn
        antIconName="plus"
        style={styles.addBtn}
        onPress={() => setModalVisible(true)}
      />
      <NoteInputModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </>
  );
};

export default FolderDetail;
