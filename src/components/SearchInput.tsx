import React, { useEffect, useMemo, useState } from 'react';
import { ContactType } from '../types/contacts';
import './searchinput.scss';

interface ISearchInputProps {
  contacts: ContactType[];
  setSearchContacts: React.Dispatch<React.SetStateAction<ContactType[]>>;
}

const SearchInput: React.FC<ISearchInputProps> = ({
  contacts,
  setSearchContacts,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchContacts = useMemo(() => {
    if (searchQuery) {
      const firstnameSearchArr = contacts.filter(contact =>
        contact.firstname.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      const lastnameSearchArr = contacts.filter(contact =>
        contact.lastname.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      const numberSearchArr = contacts.filter(contact =>
        contact.number.includes(searchQuery),
      );

      const searchContactsArr: ContactType[] = numberSearchArr;

      lastnameSearchArr.forEach(e => {
        searchContactsArr.push(e);
      });

      firstnameSearchArr.forEach(e => {
        if (lastnameSearchArr.indexOf(e) == -1) {
          searchContactsArr.push(e);
        }
      });

      return contacts.filter(
        contact => searchContactsArr.indexOf(contact) !== -1,
      );
    }

    return contacts;
  }, [searchQuery, contacts]);

  useEffect(() => {
    console.log(searchContacts);
    setSearchContacts(searchContacts);
  }, [searchContacts]);

  return (
    <div className="wrapper__search__input">
      <input
        className="form__input search__input"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Поиск"
      />
    </div>
  );
};

export default SearchInput;
