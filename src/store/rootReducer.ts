import {combineReducers} from 'redux';
import {PersistedState} from 'redux-persist';

import {authReducer} from './auth/reducers';

export const rootReducer = combineReducers({
  authReducer,
});

export type RootState = ReturnType<typeof rootReducer> & PersistedState;
