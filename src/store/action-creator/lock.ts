import { LockAction, LockActionTypes } from './../../types/lock';
import { Dispatch } from 'redux';

export const lock = () => {
  return (dispatch: Dispatch<LockAction>) => {
    dispatch({
      type: LockActionTypes.LOCK,
    });
  };
};

export const unlock = () => {
  return (dispatch: Dispatch<LockAction>) => {
    dispatch({
      type: LockActionTypes.UNLOCK,
    });
  };
};
