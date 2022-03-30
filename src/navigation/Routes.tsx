import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from './AuthProvider';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import {getCurrentUser} from '../store/auth/selectors';

const Routes = () => {
  // const [currentUserId, setCurrentUserId] = useState<string>('');
  // const userId = useSelector(getUserId);
  // const [initializing, setInitializing] = useState(true);

  // const onAuthStateChanged = (user: any) => {
  //   if (userId === '') {
  //     setCurrentUserId(user.uid);
  //   } else {
  //     setCurrentUserId(userId);
  //   }
  //   if (initializing) {
  //     setInitializing(false);
  //   }
  // };

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   auth().onAuthStateChanged(userState => {
  //     setUser(userState);

  //     if (loading) {
  //       setLoading(false);
  //     }
  //   });
  // }, []);

  // if (initializing) {
  //   return null;
  // }

  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const userId = useSelector(getCurrentUser);

  useEffect(() => {
    setUser(userId);
    const subscriber = auth().onAuthStateChanged(userState => {
      setUser(userState);

      if (loading) {
        setLoading(false);
      }
    });
    return subscriber;
  }, [loading, userId]);

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
