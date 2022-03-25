import {
  Text,
  View,
  FlatList,
  TextInput,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import FormButton from '../../components/FormButton';
import styles from './styles';
import {AuthContext} from '../../navigation/AuthProvider';
import Folder from '../../components/Folder';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Folder {
  id: number;
  folder: string;
}

const HomeScreen = () => {
  const [folderName, setFolderName] = useState<string>('');
  const [folders, setFolders] = useState<Folder[]>([
    {
      id: 1,
      folder: 'asdfasdf',
    },
    {
      id: 2,
      folder: 'asnh mejt qua',
    },
  ]);

  const addFolder = () => {
    if (folderName === '') {
      Alert.alert('Error', 'Please your folder name');
    } else {
      const newFolder: Folder = {
        id: Math.random(),
        folder: folderName,
      };
      setFolders([...folders, newFolder]);
      setFolderName('');
    }
  };

  const handleDeleteFolder = (index: number) => {
    Alert.alert('Thong bao!!!', 'Ban co chac muon xoa.', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          // let taskListTmp = [...taskList]
          // taskListTmp.splice(index, 1)
          // setTaskList(taskListTmp)
          // dispatch(deleteTodo({
          //   index: index,
          //   content: content
          // }))
          let foldersTmp = [...folders];
          foldersTmp.splice(index, 1);
          setFolders(foldersTmp);
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <AntDesign name="addfolder" size={25} color="#666" />
        </View>
        <TextInput
          value={folderName}
          style={styles.input}
          numberOfLines={1}
          onChangeText={setFolderName}
          placeholder="Add Folder"
          placeholderTextColor="#666"
        />
        <TouchableOpacity style={styles.iconStyle} onPress={addFolder}>
          <AntDesign name="plus" size={25} color="#666" />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.folderContainer}
          data={folders}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => (
            <Folder
              folder={item.folder}
              deleteFolder={() => {
                handleDeleteFolder(index);
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
