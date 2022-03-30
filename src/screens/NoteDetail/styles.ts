import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    color: colors.TEAL,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 20,
    opacity: 0.6,
  },
  time: {
    textAlign: 'right',
    fontSize: 14,
    opacity: 0.5,
  },
  btnContainer: {
    position: 'absolute',
    right: 15,
    bottom: 50,
  },
  iconDelete: {
    backgroundColor: colors.ERROR,
    marginBottom: 15,
  },
});

export default styles;
