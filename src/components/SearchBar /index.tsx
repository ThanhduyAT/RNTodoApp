import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {TextInput} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../utils/colors';

interface Prop {
  [containerStyle: string]: any;
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
}

const SearchBar = ({containerStyle, value, onChangeText, onClear}: Prop) => {
  return (
    <View style={[styles.container, {...containerStyle}]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBar}
        placeholder="Seacrh note"
      />
      {value ? (
        <AntDesign
          name="close"
          size={20}
          color={colors.GRAY}
          onPress={onClear}
          style={styles.clearIcon}
        />
      ) : null}
    </View>
  );
};

export default SearchBar;
