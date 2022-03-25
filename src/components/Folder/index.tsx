import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Folder = ({folder, deleteFolder}: any) => {
  // const [renameFolder, setRenameFolder] = useState<boolean>(false);
  let renameFolder: boolean = false;
  const [text, onChangeText] = useState<string>('');
  const editFolder = () => {
    if (renameFolder) {
      // setRenameFolder(false);
      return (renameFolder = false);
    } else {
      // setRenameFolder(renameFolder);
      return (renameFolder = true);
    }
  };

  return (
    <View style={styles.item}>
      <View>
        <AntDesign name="folder1" size={20} color="blue" />
      </View>
      <View style={{marginHorizontal: 20, flexShrink: 1}}>
        <View>
          <TextInput
            value={folder}
            onChangeText={onChangeText}
            // editable={renameFolder}
          />
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={editFolder}>
          <View>
            <AntDesign name="edit" size={20} color="red" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteFolder}>
          <View>
            <AntDesign name="delete" size={20} color="red" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Folder;
