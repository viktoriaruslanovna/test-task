import { LoginActionTypes, LoginState, LoginAction } from '../../types/login';

const initialState: LoginState = {
  loading: false,
  error: null,
};

export const loginReducer = (state = initialState, action: LoginAction) => {
  switch (action.type) {
    case LoginActionTypes.LOGIN:
      return { loading: true, error: null };

    case LoginActionTypes.LOGIN_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case LoginActionTypes.LOGIN_ERROR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
