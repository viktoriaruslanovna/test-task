export enum AuthActionTypes {
  AUTHENICATE = 'AUTHENICATE',
  UNAUTHENICATE = 'UNAUTHENICATE',
  CHECK_AUTHENICATE = 'CHECK_AUTHENICATE',
}

export interface AuthState {
  isAuth: null | boolean;
}

interface AUTHENICATE {
  type: AuthActionTypes.AUTHENICATE;
}

interface UNAUTHENICATE {
  type: AuthActionTypes.UNAUTHENICATE;
}

interface CHECK_AUTHENICATE {
  type: AuthActionTypes.CHECK_AUTHENICATE;
  payload: boolean;
}

export type AuthAction = AUTHENICATE | UNAUTHENICATE | CHECK_AUTHENICATE;
