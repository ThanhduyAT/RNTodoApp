import {Alert, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import RoundIconBtn from '../../components/RoundIconBtn';
import NoteInputModal from '../../components/NoteInputModel';
import uuid from 'react-native-uuid';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';

const formatDate = (ms: Date) => {
  const date = new Date(ms);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
};

interface Note {
  id: string;
  title: string;
  desc: string;
  time: number;
}

const NoteDetail = (props: any) => {
  const folderId = props.route.params.id;
  const folderName = props.route.params.name;
  const [note, setNote] = useState(props.route.params.note);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const ref = firestore().collection('folders');

  const deleteNote = () => {
    ref.doc(folderId).collection(folderName).doc(note.id).delete();
    props.navigation.goBack();
  };

  const handleUpdate = async (title: string, desc: string, time?: Date) => {
    console.log(title, desc, time);
    console.log(uuid.v4());
    const newNote = {
      title,
      desc,
      time,
    };
    ref.doc(folderId).collection(folderName).doc(note.id).update(newNote);
    setNote(newNote);
  };

  const handleOnClose = () => setShowModal(false);

  const displayDeleteAlert = () => {
    Alert.alert('Ban co chac muon xoa khong', 'Cai nay se duoc xoa', [
      {
        text: 'Delete',
        onPress: deleteNote,
      },
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
    ]);
  };

  const openEditModal = () => {
    setIsEdit(true);
    setShowModal(true);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.time}>{`Create At ${formatDate(note.time)}`}</Text>
        <Text style={styles.desc}>{note.desc}</Text>
      </ScrollView>
      <View style={styles.btnContainer}>
        <RoundIconBtn
          antIconName="delete"
          style={styles.iconDelete}
          onPress={displayDeleteAlert}
        />
        <RoundIconBtn antIconName="edit" onPress={openEditModal} />
      </View>
      <NoteInputModal
        isEdit={isEdit}
        note={note}
        onClose={handleOnClose}
        onSubmit={handleUpdate}
        visible={showModal}
      />
    </>
  );
};

export default NoteDetail;
