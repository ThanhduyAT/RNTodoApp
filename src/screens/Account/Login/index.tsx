import React, {useState} from 'react';
import {ScrollView, Image, Text, TouchableOpacity, Alert} from 'react-native';
import FormButton from '../../../components/FormButton';
import FormInput from '../../../components/FormInput';
import styles from './styles';
import {requestSignInEmailPassword} from '../../../store/auth/actions';
import {useDispatch} from 'react-redux';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();

  const handleSignIn = (email: string, password: string) => {
    if (email && password) {
      const user = {email, password};
      dispatch(requestSignInEmailPassword(user));
    } else {
      Alert.alert('Vui long nhap dau du thong tin');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994zqcpwozsvy.png')}
        style={styles.logo}
      />
      <FormInput
        labelValue={email}
        onChangeText={(userEmail: string) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword: string) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={() => handleSignIn(email, password)}
      />
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>Sign Up?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;
