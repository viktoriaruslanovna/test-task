import { ContactsAction, ContactsActionTypes } from './../../types/contacts';
import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchContacts = (method: string, body?: {}, id?: number) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const baseUrl = 'http://localhost:3004/contacts/';
  switch (method) {
    case 'get':
      return async (dispatch: Dispatch<ContactsAction>) => {
        try {
          dispatch({ type: ContactsActionTypes.FETCH_CONTACTS });
          const response = await axios.get(baseUrl);
          dispatch({
            type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS,
            payload: response.data,
          });
          console.log(response.data);
        } catch {
          dispatch({
            type: ContactsActionTypes.FETCH_CONTACTS_ERROR,
            payload: 'Произошла ошибка',
          });
          console.log('error');
        }
      };

    case 'post':
      return async (dispatch: Dispatch<ContactsAction>) => {
        try {
          const response = await axios.post(baseUrl, body, config);
          return true;
        } catch (e) {
          dispatch({
            type: ContactsActionTypes.FETCH_CONTACTS_ERROR,
            payload: 'Произошла ошибка',
          });
          console.log(e);
          return false;
        }
      };

    case 'delete':
      return async (dispatch: Dispatch<ContactsAction>) => {
        try {
          const response = await axios.delete(baseUrl + id);
          return true;
        } catch (e) {
          dispatch({
            type: ContactsActionTypes.FETCH_CONTACTS_ERROR,
            payload: 'Произошла ошибка',
          });
          console.log(e);
          return false;
        }
      };

    case 'put':
      return async (dispatch: Dispatch<ContactsAction>) => {
        try {
          const response = await axios.patch(baseUrl + id, body, config);
          return true;
        } catch (e) {
          dispatch({
            type: ContactsActionTypes.FETCH_CONTACTS_ERROR,
            payload: 'Произошла ошибка',
          });
          console.log(e);
          return false;
        }
      };
  }
};
