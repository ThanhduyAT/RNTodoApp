import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface Props {
  buttonTitle: string;
  [rest: string]: any;
}

const FormButton = ({buttonTitle, ...rest}: Props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;
