import {firebase} from '@react-native-firebase/auth';

export const signUpWithEmailPasswordFirebase = async (
  email: string,
  password: string,
) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => console.log(user + 'signed Up'))
    .catch(err => {
      throw new Error(err);
    });
};

export const signOutFirebase = () => {
  firebase.auth().signOut();
};

export const signInWithEmailPasswordFirebase = async (
  email: string,
  password: string,
) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => user.user)
    .catch(err => {
      throw new Error(err);
    });
};
