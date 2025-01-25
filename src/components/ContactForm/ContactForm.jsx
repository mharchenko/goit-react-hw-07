// import React from 'react';

// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import * as Yup from 'yup';

// import s from './ContactForm.module.css';

// const ContactForm = ({ onAddContact }) => {
//   const handleSubmit = (values, { resetForm }) => {
//     onAddContact(values.name, values.number);

//     resetForm();
//   };

//   const onlyNumbers = /^\d{3}-\d{2}-\d{2}$/;
//   const registerSchema = Yup.object().shape({
//     name: Yup.string()
//       .min(3, 'Введіть мінімум 3 символи')
//       .max(20, 'Введіть не більше 20 символів')
//       .required('Це поле є обов"язковим для заповнення'),
//     number: Yup.string()
//       .matches(onlyNumbers, 'Формат: XXX-XX-XX')
//       .required('Це поле є обов"язковим для заповнення'),
//   });

//   return (
//     <Formik
//       onSubmit={handleSubmit}
//       initialValues={{
//         name: '',
//         number: '',
//       }}
//       validationSchema={registerSchema}
//     >
//       <div className={s.wrapper}>
//         <Form className={s.form}>
//           <label className={s.label}>Name:</label>
//           <Field type="text" name="name" className={s.input} />
//           <ErrorMessage name="name" component="div" className={s.error} />
//           <label className={s.label}>Number:</label>
//           <Field type="text" name="number" className={s.input} />
//           <ErrorMessage name="number" component="div" className={s.error} />
//           <button type="submit" className={s.button}>
//             Add contact
//           </button>
//         </Form>
//       </div>
//     </Formik>
//   );
// };

// export default ContactForm;




import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/contactsSlice';
import { useId } from 'react';

const ContactForm = () => {
const NameId = useId()
const NumberId = useId()
const dispatch = useDispatch()
const initialValues ={name:'', number:''}

  const onSubmit = (values, { resetForm }) => {
    const newContact={
      id:nanoid(),
      name:values.name,
      number:values.number};
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
          <label className={s.label} htmlFor={NameId}>Name:</label>
          <Field type="text" name="name" className={s.input} id={NameId} />
          <ErrorMessage name="name" component="div" className={s.error} />

          <label className={s.label} htmlFor={NumberId}>Number:</label>
          <Field type="text" name="number" className={s.input} id={NumberId}/>
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
