import {
  View,
  FlatList,
  TextInput,
  Alert,
  TouchableOpacity,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Folder from '../../components/Folder';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import colors from '../../utils/colors';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentUser, isLogged} from '../../store/auth/selectors';
import { requestSignOut } from '../../store/auth/actions';

interface Folder {
  id: string;
  folder: string;
}

const HomeScreen = ({navigation}: any) => {
  const [folderName, setFolderName] = useState<string>('');
  const [folders, setFolders] = useState<Folder[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = firestore().collection('folders');

  const userId = useSelector(getCurrentUser);
  const logined = useSelector(isLogged);
  // console.log(userId);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(requestSignOut());
  };

  const openFolder = (folder: any) => {
    console.log(folder.folder);
    navigation.navigate('FolderDetail', {
      name: folder.folder,
      id: folder.id,
    });
  };

  const addFolder = () => {
    if (folderName === '') {
      Alert.alert('Error', 'Please your folder name');
    } else {
      let folderId: string = `${uuid.v4()}`;
      const newFolder: Folder = {
        id: folderId,
        folder: folderName,
      };
      ref.doc(`${folderId}`).set({
        id: folderId,
        folder: folderName,
      });
      setFolders([...folders, newFolder]);
      setFolderName('');
    }
  };

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list: Folder[] = [];
      querySnapshot.forEach(doc => {
        const {id, folder} = doc.data();
        list.push({
          id: id,
          folder: folder,
        });
      });

      setFolders(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, [loading, ref]);

  if (loading) {
    return null; // or a spinner
  }

  const handleDeleteFolder = (item: any, index: number) => {
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
          ref.doc(item.id).delete();
          let foldersTmp = [...folders];
          foldersTmp.splice(index, 1);
          setFolders(foldersTmp);
        },
      },
    ]);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.LIGHT} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Folders</Text>
        </View>
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
        <View style={styles.flatListContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.folderContainer}
            data={folders}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => (
              <Folder
                id={item.id}
                folder={item.folder}
                deleteFolder={() => {
                  handleDeleteFolder(item, index);
                }}
                onPress={() => openFolder(item)}
              />
            )}
          />
        </View>
        {/* <View>
          <Button title="Sign Out" onPress={() => handleSignOut()} />
        </View> */}
      </View>
    </>
  );
};

export default HomeScreen;
