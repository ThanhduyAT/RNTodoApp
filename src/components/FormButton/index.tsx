import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const FormButton = ({buttonTitle, ...rest}: any) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;
