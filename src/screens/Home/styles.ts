import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {windowHeight} from '../../utils/Dimentions';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 30,
    justifyContent: 'center',
    color: colors.YELLOW,
  },
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    alignItems: 'flex-start',
    padding: 20,
  },
  text: {
    fontSize: 30,
    color: '#333333',
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  folderContainer: {
    padding: 0,
    paddingBottom: 10,
    width: '100%',
  },
  flatListContainer: {
    flex: 1,
  },
});

export default styles;
