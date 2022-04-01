import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  labelValue: string;
  placeholderText: string;
  iconType: string;
  [rest: string]: any;
}

const FormInput = ({labelValue, placeholderText, iconType, ...rest}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={25} color="#666" />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInput;
