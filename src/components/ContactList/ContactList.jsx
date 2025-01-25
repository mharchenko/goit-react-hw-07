
// import Contact from '../Contact/Contact';
// import { useSelector } from 'react-redux';
// import { selectContacts } from '../../redux/select';
// import { selectFilter } from '../../redux/select';
// import s from './ContactList.module.css';



// const ContactList = () => {
//   const contacts = useSelector(selectContacts);  
//   const filter = useSelector(selectFilter);  
  
  
//   const filteredContacts = contacts.filter((contact) =>
//     filter ? contact.name.toLowerCase().includes(filter.toLowerCase()) : true
//   );

  
//   return (
//     <ul>
//       {filteredContacts.length > 0 ? (
//         filteredContacts.map(item => (
//           <Contact {...item} key={item.id} />
//         ))
//       ) : (
//         <div className={s.box}>
//         <p className={s.p}>No contacts...</p> 
//         </div> 
//       )}
//     </ul>
//   );
// };

// export default ContactList;



import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
// import { selectContacts } from '../../redux/select';
// import { selectFilter } from '../../redux/select';
import s from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/select';



const ContactList = () => {

  const filteredContacts = useSelector(selectFilteredContacts)
  // const contacts = useSelector(selectContacts);  
  // const filter = useSelector(selectFilter);  
  
  
  // const filteredContacts = contacts.filter((contact) =>
  //   filter ? contact.name.toLowerCase().includes(filter.toLowerCase()) : true
  // );

  
  return (
    <ul>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(item => (
          <Contact {...item} key={item.id} />
        ))
      ) : (
        <div className={s.box}>
        <p className={s.p}>No contacts...</p> 
        </div> 
      )}
    </ul>
  );
};

export default ContactList;

