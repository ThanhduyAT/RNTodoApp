import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {RootState} from '../../rootReducer';

import {AuthState} from '../types';

const getState = (state: RootState): AuthState => state.authReducer;

const getUserId = (state: RootState): string =>
  state.authReducer.currentUser?.uid || '';

const isLogged = (state: RootState): boolean => state.authReducer.isLogged;

const isLoading = (state: RootState): boolean => state.authReducer.isLoading;

const getCurrentUser = (state: RootState): FirebaseAuthTypes.User | null =>
  state.authReducer.currentUser || null;

export {getState, getUserId, isLoading, isLogged, getCurrentUser};
