import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {TextInput} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../utils/colors';

const SearchBar = ({containerStyle, value, onChangeText, onClear}: any) => {
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
