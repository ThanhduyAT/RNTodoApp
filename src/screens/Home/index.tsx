import {Text, View} from 'react-native';
import React, {useContext} from 'react';
import FormButton from '../../components/FormButton';
import styles from './styles';
import {AuthContext} from '../../navigation/AuthProvider';

const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>asdfsadf {user.email} </Text>
      <FormButton buttonTitle="LogOut" onPress={() => logout()} />
    </View>
  );
};

export default HomeScreen;
