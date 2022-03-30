import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export enum AuthTypes {
  SIGNIN = '@auth/SIGNIN',
  REQUEST_SIGNIN_EMAIL_PASSWORD = '@auth/REQUEST_SIGNIN_EMAIL_PASSWORD',
  SIGNOUT = '@auth/SIGNOUT',
  REQUEST_SIGNOUT = '@auth/REQUEST_SIGNOUT',
  REQUEST_SIGNUP_EMAIL_PASSWORD = '@auth/REQUEST_SIGNUP_EMAIL_PASSWORD',
  SIGNUP_SUCCESS = '@auth/SIGNUP_SUCCESS',
  AUTH_ERROR = '@auth/AUTH_ERROR',
}

export type AuthState = {
  isLogged: boolean;
  isLoading: boolean;
  email: string;
  currentUser: FirebaseAuthTypes.User | null;
  error?: string;
};

export type AuthAction<Payload> = {
  type: AuthTypes;
  payload: Payload;
};

export type AuthReducer = (
  state: AuthState,
  actions: AuthAction<AuthState>,
) => AuthState;

export interface AuthSignInInput {
  email: string;
  password: string;
}

export interface AuthSignUpInput {
  email: string;
  password: string;
}
