import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import {isLogged} from '../store/auth/selectors';

const Routes = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const logIn = useSelector(isLogged);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userState => {
      setUser(userState);

      if (loading) {
        setLoading(false);
      }
    });
    return subscriber;
  }, [loading]);

  return (
    <NavigationContainer>
      {user && logIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
