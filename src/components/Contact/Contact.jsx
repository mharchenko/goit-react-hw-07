

import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
// import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ id, name, number}) => {
  const dispatch = useDispatch()
  return (
    <li className={s.item}>
      <span>
        <FaUser className={s.icon} /> {name}:
      </span>
      <span>
        <FaPhoneAlt className={s.icon} /> {number}
      </span>
      <button className={s.button} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;