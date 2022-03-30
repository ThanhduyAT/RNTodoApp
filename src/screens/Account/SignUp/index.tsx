import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Platform, Alert} from 'react-native';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import SocialButton from '../../../components/SocialButton';
import {requestSignUpEmailPassword} from '../../../store/auth/actions';
import styles from './styles';
import {useDispatch} from 'react-redux';

const SignupScreen = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const dispatch = useDispatch();

  const handleSignUp = (email: string, password: string) => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        const user = {email, password};
        dispatch(requestSignUpEmailPassword(user));
      } else {
        Alert.alert('Mat khau khong khop');
      }
    } else {
      Alert.alert('Vui long nhap day du');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

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
      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword: string) =>
          setConfirmPassword(userPassword)
        }
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => handleSignUp(email, password)}
      />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
