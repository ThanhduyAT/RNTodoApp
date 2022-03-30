import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const NotFound = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <AntDesign name="frowno" size={90} color="black" />
      <Text style={styles.textContainer}>Result Not Found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
    zIndex: -1,
  },
  textContainer: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default NotFound;
