import { LoginAction, LoginActionTypes, IBody } from './../../types/login';
import { userStorage } from '../../storage/userStorage';
import { Dispatch } from 'redux';
import axios from 'axios';

export const login = (body: IBody) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return async (dispatch: Dispatch<LoginAction>) => {
    try {
      dispatch({ type: LoginActionTypes.LOGIN });
      const response = await axios.post(
        'https://conduit-api-realworld.herokuapp.com/api/users/login',
        body,
        config,
      );
      dispatch({
        type: LoginActionTypes.LOGIN_SUCCESS,
      });
      userStorage.set(response.data.user);
      return true;
    } catch {
      dispatch({
        type: LoginActionTypes.LOGIN_ERROR,
        payload: 'Неверно введены почта или пароль ',
      });
      return false;
    }
  };
};
