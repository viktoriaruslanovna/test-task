import { AuthActionTypes, AuthState, AuthAction } from '../../types/auth';

const initialState: AuthState = {
  isAuth: null,
};

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.AUTHENICATE:
      return { isAuth: true };

    case AuthActionTypes.UNAUTHENICATE:
      return {
        isAuth: false,
      };

    case AuthActionTypes.CHECK_AUTHENICATE:
      return { isAuth: action.payload };

    default:
      return state;
  }
};
