import {Alert, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import RoundIconBtn from '../../components/RoundIconBtn';
import NoteInputModal from '../../components/NoteInputModel';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../models/app';

type Props = NativeStackScreenProps<RootStackParams, 'NoteDetail'>;

const formatDate = (ms: number) => {
  const date = new Date(ms);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
};

interface INote {
  id: string;
  title: string;
  desc: string;
  time: number;
}

const NoteDetail = ({route, navigation}: Props) => {
  const {folderName, id} = route.params.folder;
  const [note, setNote] = useState(route.params.note);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const ref = firestore().collection('folders');

  const deleteNote = () => {
    ref.doc(id).collection(folderName).doc(note.id).delete();
    navigation.goBack();
  };

  const handleUpdate = async (title: string, desc: string, time: number) => {
    console.log(title, desc, time);
    const newNote: INote = {
      id: note.id,
      title,
      desc,
      time,
    };
    console.log(note.id);
    ref.doc(id).collection(folderName).doc(note.id).update({
      title: title,
      desc: desc,
      time: time,
    });
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
        <Text style={styles.time}>{`Create At ${formatDate(note.time)}`}</Text>
        <Text style={styles.time}>{note.id}</Text>
        <Text style={styles.title}>{note.title}</Text>
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
