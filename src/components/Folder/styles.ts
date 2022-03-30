import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.LIGHT_GREY,
  },
  textInputContainer: {
    marginHorizontal: 20,
    flexShrink: 1,
  },
  iconContainer: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconFolderContainer: {
    width: '10%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  folderContainer: {
    padding: 20,
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '100%',
    elevation: 0.5,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexGrow: 0,
    flexDirection: 'row',
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginHorizontal: 20,
    flexShrink: 1,
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: colors.BLUE_PICK,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 3,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.GRAY_DOVE,
  },
});

export default styles;
