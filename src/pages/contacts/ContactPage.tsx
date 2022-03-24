import React, { useEffect, useState } from 'react';
import plus from './media/plus.svg';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useNavigate } from 'react-router';
import ContactItem from './ContactItem';
import Modal from '../../components/Modal';
import ContactForm from '../../components/ContactForm';
import { ContactType } from '../../types/contacts';
import Loader from '../../components/Loader';
import SearchInput from '../../components/SearchInput';
import './contactspage.scss';

const ContactsPage: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [searchContacts, setSearchContacts] = useState<ContactType[]>([]);

  const navigate = useNavigate();

  const { contacts, loading, error } = useTypedSelector(
    state => state.contacts,
  );

  const { unauthenicate, fetchContacts } = useActions();
  const { lock } = useActions();

  useEffect(() => {
    fetchContacts('get');
  }, []);

  const logout = () => {
    unauthenicate();
    navigate('/');
  };

  return (
    <div className="contacts__page">
      <Modal modal={modal} setModal={setModal}>
        <ContactForm setVisible={setModal} />
      </Modal>
      <div className="wrapper__right">
        <button
          className="btn__plus"
          onClick={() => {
            setModal(true);
            lock();
          }}
        >
          <img className="plus" src={plus} alt="" />
        </button>
      </div>
      <div className="wrapper__left">
        <button className="logout__btn" onClick={logout}>
          Выйти
        </button>
      </div>
      <h1>Ваши контакты</h1>
      <SearchInput contacts={contacts} setSearchContacts={setSearchContacts} />
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>Ошибка на сервере</h1>
      ) : (
        <div className="contacts__list">
          {searchContacts
            ? searchContacts.map(contact => (
                <ContactItem contact={contact} key={contact.id} />
              ))
            : contacts.map(contact => (
                <ContactItem contact={contact} key={contact.id} />
              ))}
        </div>
      )}
    </div>
  );
};

export default ContactsPage;
