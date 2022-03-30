import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    marginVertical: 10,
  },
  searchBar: {
    borderColor: colors.GRAY_DOVE,
    borderWidth: 0.5,
    height: 50,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 20,
  },
  clearIcon: {
    position: 'absolute',
    right: 10,
  },
});

export default styles;
