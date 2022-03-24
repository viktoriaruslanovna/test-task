import { useActions } from '../../hooks/useActions';
import remove from './media/remove.svg';
import change from './media/three_dots.svg';
import './contactspage.scss';
import { useState } from 'react';
import ChangeContactForm from '../../components/ChangeContactForm';
import { ContactType } from '../../types/contacts';

interface IContactItemProps {
  contact: ContactType;
}

const ContactItem: React.FC<IContactItemProps> = ({ contact }) => {
  const [changePost, setChangePost] = useState(false);
  const { fetchContacts } = useActions();

  const removeContact = async (id: number) => {
    const result = await fetchContacts('delete', [], id);
    result && fetchContacts('get');
  };

  const changeContact = async (id: number) => {
    setChangePost(true);
    console.log(changePost);
    // const result = await fetchContacts('delete', [], id);
    // result && fetchContacts('get');
  };
  return (
    <div className="wrapper">
      <div className="contact">
        {changePost ? (
          <ChangeContactForm contact={contact} setChangePost={setChangePost} />
        ) : (
          <div className="contact__wrapper">
            <div className="contact__group">
              <p className="contact__firstname">{contact.firstname}</p>
              <p className="contact__lastname">{contact.lastname}</p>
            </div>
            <p className="contact__number">{contact.number}</p>
          </div>
        )}

        <div className="contact__btns">
          <button
            onClick={() => changeContact(contact.id)}
            className="contact__btn"
          >
            <img src={change} alt="remove" />
          </button>
          <button
            onClick={e => removeContact(contact.id)}
            className="contact__btn"
          >
            <img src={remove} alt="remove" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactItem;
