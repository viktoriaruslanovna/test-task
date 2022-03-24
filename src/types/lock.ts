export enum LockActionTypes {
  LOCK = 'LOCK',
  UNLOCK = 'UNLOCK',
}

export interface LockState {
  isLock: null | boolean;
}

interface LOCK {
  type: LockActionTypes.LOCK;
}

interface UNLOCK {
  type: LockActionTypes.UNLOCK;
}

export type LockAction = LOCK | UNLOCK;
