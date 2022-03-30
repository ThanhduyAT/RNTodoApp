import {StyleSheet, Text} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import {windowWidth} from '../../utils/Dimentions';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Note = ({item, onPress}: any) => {
  const {title, desc} = item;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text numberOfLines={3}>{desc}</Text>
    </TouchableOpacity>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 2 - 30,
    backgroundColor: colors.LIGHT_BLUE,
    padding: 8,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.LIGHT,
  },
});
