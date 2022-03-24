import {
  ContactsActionTypes,
  IContactsState,
  ContactsAction,
} from '../../types/contacts';

const initialState: IContactsState = {
  contacts: [],
  loading: false,
  error: null,
};

export const contactsReducer = (
  state = initialState,
  action: ContactsAction,
) => {
  switch (action.type) {
    case ContactsActionTypes.FETCH_CONTACTS:
      return { contacts: [], loading: true, error: null };

    case ContactsActionTypes.FETCH_CONTACTS_SUCCESS:
      return { contacts: action.payload, loading: false, error: null };

    case ContactsActionTypes.FETCH_CONTACTS_ERROR:
      return { contacts: [], loading: false, error: action.payload };

    default:
      return state;
  }
};
