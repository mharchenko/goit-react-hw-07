




import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';

import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {

const dispatch = useDispatch()
const initialValues ={name:'', number:''}

  const onSubmit = (values, { resetForm }) => {
    
      const { name, number } = values; 
      const newContact = { name, number }; 

       dispatch(addContact(newContact));
    resetForm();
  };

  const onlyNumbers = /^\d{3}-\d{2}-\d{2}$/;
  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Введіть мінімум 3 символи')
      .max(20, 'Введіть не більше 20 символів')
      .required('Це поле є обов"язковим для заповнення'),
    number: Yup.string()
      .matches(onlyNumbers, 'Формат: XXX-XX-XX')
      .required('Це поле є обов"язковим для заповнення'),
  });

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={registerSchema}
    >
      <div className={s.wrapper}>
        <Form className={s.form}>
          <label className={s.label} htmlFor='name'>Name:</label>
          <Field type="text" name="name" className={s.input} id='name' />
          <ErrorMessage name="name" component="div" className={s.error} />

          <label className={s.label} htmlFor='number'>Number:</label>
          <Field type="text" name="number" className={s.input} id='number'/>
          <ErrorMessage name="number" component="div" className={s.error} />
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default ContactForm;
