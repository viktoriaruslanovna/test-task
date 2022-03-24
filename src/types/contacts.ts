export enum ContactsActionTypes {
  FETCH_CONTACTS = 'FETCH_CONTACTS',
  FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR',
}

export type ContactType = {
  id: number;
  firstname: string;
  lastname: string;
  number: string;
};

export interface IContactsState {
  contacts: ContactType[];
  loading: boolean;
  error: null | string;
}

interface FETCH_CONTACTS {
  type: ContactsActionTypes.FETCH_CONTACTS;
}

interface FETCH_CONTACTS_SUCCESS {
  type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS;
  payload: [];
}

interface FETCH_CONTACTS_ERROR {
  type: ContactsActionTypes.FETCH_CONTACTS_ERROR;
  payload: string;
}

export type ContactsAction =
  | FETCH_CONTACTS
  | FETCH_CONTACTS_SUCCESS
  | FETCH_CONTACTS_ERROR;
