import {
  Modal,
  StyleSheet,
  View,
  Pressable,
  TextInput,
  Keyboard,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RoundIconBtn from '../RoundIconBtn';
import styles from './styles';

const NoteInputModal = ({visible, onClose, onSubmit, note, isEdit}: any) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (isEdit) {
      setTitle(note.title);
      setDesc(note.desc);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit]);

  const handleOnChangeText = (text: string, valueFor: string) => {
    if (valueFor === 'title') {
      setTitle(text);
    }
    if (valueFor === 'desc') {
      setDesc(text);
    }
  };

  const handleSubmit = () => {
    if (!title.trim() && !desc.trim()) {
      return onClose();
    }

    if (isEdit) {
      onSubmit(title, desc, Date.now());
    } else {
      onSubmit(title, desc);
      setTitle('');
      setDesc('');
    }
    onClose();
  };

  const closeModal = () => {
    if (!isEdit) {
      setTitle('');
      setDesc('');
    }
    onClose();
  };

  return (
    <>
      <Modal visible={visible} animationType="fade">
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            {isEdit ? (
              <Text style={styles.textHeader}>Update</Text>
            ) : (
              <Text style={styles.textHeader}>New Note</Text>
            )}

            <RoundIconBtn
              size={15}
              color
              style={styles.closeIcon}
              antIconName="close"
              onPress={closeModal}
            />
          </View>
          <TextInput
            value={title}
            onChangeText={text => handleOnChangeText(text, 'title')}
            placeholder="Title"
            style={[styles.input, styles.title]}
          />
          <TextInput
            value={desc}
            multiline
            placeholder="Note"
            style={[styles.input, styles.desc]}
            onChangeText={text => handleOnChangeText(text, 'desc')}
          />
          <View style={styles.btnContainer}>
            <RoundIconBtn
              size={15}
              antIconName="check"
              onPress={handleSubmit}
            />
          </View>
        </View>
        <Pressable onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </Pressable>
      </Modal>
    </>
  );
};

export default NoteInputModal;
