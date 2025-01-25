
// import ContactForm from './components/ContactForm/ContactForm';
// import SearchBox from './components/SearchBox/SearchBox';
// import ContactList from './components/ContactList/ContactList';

// function App() {
  
//   return (
//     <>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       <ContactList
        
//       />
//     </>
//   );
// }

// export default App;

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
   
  }, [dispatch])
  
  
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList
        
      />
    </>
  );
}

export default App;
