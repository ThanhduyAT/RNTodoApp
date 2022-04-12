import {View, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import colors from '../../utils/colors';

interface Props {
  id: string;
  folderName: string;
  deleteFolderssss: () => void;
  onPress: () => void;
}

const Folder = ({
  id,
  folderName,
  deleteFolderssss: deleteFolder,
  onPress,
}: Props) => {
  const [renameFolder, setRenameFolder] = useState(false);
  const [text, onChangeText] = useState<string>(folderName);
  const ref = firestore().collection('folders');
  const editFolder = () => {
    if (renameFolder) {
      setRenameFolder(false);
    } else {
      setRenameFolder(true);
    }
    Keyboard.dismiss();
  };
  const handleRenameFolder = () => {
    setRenameFolder(false);
    ref.doc(id).update({
      folder: text,
    });
  };

  return (
    <View style={styles.folderContainer}>
      <View style={styles.iconFolderContainer}>
        <AntDesign name="folder1" size={20} color={colors.BLUE_PICK} />
      </View>
      <View style={styles.inputContainer}>
        <View>
          <TouchableOpacity onPress={onPress}>
            <TextInput
              value={text}
              onChangeText={onChangeText}
              editable={renameFolder}
              onEndEditing={handleRenameFolder}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={editFolder}>
          <View>
            {renameFolder ? (
              <AntDesign name="check" size={20} color={colors.GREEN} />
            ) : (
              <AntDesign name="edit" size={20} color={colors.SELECTED} />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteFolder}>
          <View>
            <AntDesign name="delete" size={20} color={colors.ERROR} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Folder;
