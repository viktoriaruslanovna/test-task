import { AuthAction, AuthActionTypes } from './../../types/auth';
import { Dispatch } from 'redux';
import { userStorage } from '../../storage/userStorage';

export const authenicate = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: AuthActionTypes.AUTHENICATE,
    });
  };
};

export const unauthenicate = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: AuthActionTypes.UNAUTHENICATE,
    });
    userStorage.set('');
  };
};

export const checkAuth = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: AuthActionTypes.CHECK_AUTHENICATE,
      payload: userStorage.get() ? true : false,
    });
  };
};
