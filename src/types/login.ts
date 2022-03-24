export enum LoginActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
}

export interface LoginState {
  loading: boolean;
  error: null | string;
}

interface LOGIN {
  type: LoginActionTypes.LOGIN;
}

interface LOGIN_SUCCESS {
  type: LoginActionTypes.LOGIN_SUCCESS;
}

interface LOGIN_ERROR {
  type: LoginActionTypes.LOGIN_ERROR;
  payload: string;
}

export type LoginAction = LOGIN | LOGIN_SUCCESS | LOGIN_ERROR;

export type FormData = {
  email: string;
  password: string;
};

export interface IBody {
  user: FormData;
}
