import produce from 'immer';
import {Reducer} from 'redux';

import {AuthState, AuthTypes} from '../types';

const initialState: AuthState = {
  isLogged: false,
  isLoading: false,
  email: '',
  currentUser: null,
  error: undefined,
};

const authReducer: Reducer<AuthState> = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case AuthTypes.SIGNIN: {
        draft.isLogged = true;
        draft.isLoading = false;
        draft.error = undefined;
        draft.currentUser = action.payload.currentUser;
        draft.email = action.payload.currentUser.email;
        break;
      }
      case AuthTypes.REQUEST_SIGNOUT: {
        draft.isLogged = false;
        draft.isLoading = true;
        draft.currentUser = null;
        draft.error = undefined;
        break;
      }
      case AuthTypes.SIGNOUT: {
        draft.isLogged = false;
        draft.isLoading = false;
        draft.currentUser = null;
        draft.error = undefined;
        draft.email = '';
        break;
      }
      case AuthTypes.AUTH_ERROR: {
        draft.isLoading = false;
        draft.error = action.payload.error;
        break;
      }
      case AuthTypes.REQUEST_SIGNIN_EMAIL_PASSWORD: {
        draft.isLoading = true;
        draft.error = undefined;
        break;
      }
      case AuthTypes.REQUEST_SIGNUP_EMAIL_PASSWORD: {
        draft.isLogged = false;
        draft.isLoading = true;
        draft.error = undefined;
        break;
      }
      case AuthTypes.SIGNUP_SUCCESS: {
        draft.isLogged = false;
        draft.isLoading = false;
        draft.error = undefined;
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export {authReducer};
