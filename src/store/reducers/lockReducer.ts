import { LockActionTypes, LockState, LockAction } from '../../types/lock';

const initialState: LockState = {
  isLock: null,
};

export const lockReducer = (state = initialState, action: LockAction) => {
  switch (action.type) {
    case LockActionTypes.LOCK:
      return { isLock: true };

    case LockActionTypes.UNLOCK:
      return {
        isLock: false,
      };
    default:
      return state;
  }
};
