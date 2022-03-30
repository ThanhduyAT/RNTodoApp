import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../utils/colors';
import styles from './styles';

const RoundIconBtn = ({antIconName, size, color, style, onPress}: any) => {
  return (
    <AntDesign
      name={antIconName}
      size={size || 24}
      color={color || colors.LIGHT}
      style={[styles.icon, {...style}]}
      onPress={onPress}
    />
  );
};

export default RoundIconBtn;
