import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { contactsReducer } from './contactsReducer';
import { authReducer } from './authReducer';
import { lockReducer } from './lockReducer';

export const rootReducer = combineReducers({
  login: loginReducer,
  contacts: contactsReducer,
  auth: authReducer,
  lock: lockReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
