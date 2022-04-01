import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../utils/colors';
import styles from './styles';

interface Props {
  antIconName: string;
  size?: number;
  color?: string;
  [style: string]: any;
  onPress: any;
}

const RoundIconBtn = ({antIconName, size, color, style, onPress}: Props) => {
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
