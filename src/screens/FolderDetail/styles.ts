import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  textHeader: {
    fontSize: 30,
    justifyContent: 'center',
    color: colors.ORANGE,
  },
  flatListContainer: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    zIndex: -1,
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 0.2,
  },
  addBtn: {
    position: 'absolute',
    right: 15,
    bottom: 50,
    zIndex: 1,
  },
});

export default styles;
