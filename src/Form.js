// import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

// const validate = (values) => {
//   const errors = {};

//   if (!values.name) {
//     errors.name = 'обязательное поле';
//   } else if (values.name.length < 2) {
//     errors.name = 'должно быть минимум 2 символа';
//   }

//   if (!values.email) {
//     errors.email = 'обязательное поле';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = 'неправильный email';
//   }

//   return errors;
// };

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} {...field} />
      {meta.touched && meta.error ? (
        <p className="error">{meta.error}</p>
      ) : null}
    </>
  );  
};

const MyCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  
  return (
    <>
      <label htmlFor={props.id}>
        <input type="checkbox" {...props} {...field} />
        {children}
      </label>
       {meta.touched && meta.error ? (
        <p className="error">{meta.error}</p>
      ) : null}
    </>
  );  
};

const CustomForm = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     email: '',
  //     amount: 0,
  //     currency: '',
  //     text: '',
  //     terms: false,
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string()
  //       .min(2, 'Минимум 2 символа')
  //       .required('Обязательное поле!'),
  //     email: Yup.string()
  //       .email('Не корректный e-mail')
  //       .required('Обязательное поле!'),
  //     amount: Yup.number()
  //       .min(5, 'Не должно быть меньше 5')
  //       .required('Обязательное поле!'),
  //     currency: Yup.string().required('Выберите валюту'),
  //     text: Yup.string().min(10, 'Не менее 10 символов'),
  //     terms: Yup.boolean()
  //       .required('Необходимо согласие!')
  //       .oneOf([true], 'Необходимо согласие!'),
  //   }),
  //   onSubmit: (values) => {
  //     console.log(JSON.stringify(values, null, 2));
  //   },
  // });

  return (
    <Formik
      initialValues = {{
      name: '',
      email: '',
      amount: 0,
      currency: '',
      text: '',
      terms: false,
    }}
    validationSchema = {Yup.object({
      name: Yup.string()
        .min(2, 'Минимум 2 символа')
        .required('Обязательное поле!'),
      email: Yup.string()
        .email('Не корректный e-mail')
        .required('Обязательное поле!'),
      amount: Yup.number()
        .min(5, 'Не должно быть меньше 5')
        .required('Обязательное поле!'),
      currency: Yup.string().required('Выберите валюту'),
      text: Yup.string().min(10, 'Не менее 10 символов'),
      terms: Yup.boolean()
        .required('Необходимо согласие!')
        .oneOf([true], 'Необходимо согласие!'),
    })}
    onSubmit = {(values) => {
      console.log(JSON.stringify(values, null, 2));
    }}
    >
      <Form className='form'>
        <h2>Отправить пожертвование</h2>
        {/* <label htmlFor='name'>Ваше имя</label>
        <Field
          id='name'
          name='name'
          type='text'
          // {...formik.getFieldProps('name')}
        />
        <ErrorMessage className='error' name="name" component="p" /> */}
        <MyTextInput 
          label="Ваше имя"
          id='name'
          name='name'
          type='text'
        />
        {/* {formik.errors.name && formik.touched.name ? (
          <p className='error'>{formik.errors.name}</p>
        ) : null} */}
        <MyTextInput 
          label="Ваша почта"
          id='email'
          name='email'
          type='email'
        />
        <label htmlFor='amount'>Количество</label>
        <Field
          id='amount'
          name='amount'
          type='number'
        />
        <ErrorMessage className='error' name="amount" component="p" />
        <label htmlFor='currency'>Валюта</label>
        <Field
          id='currency'
          name='currency'
          as="select"
        >
          <option value=''>Выберите валюту</option>
          <option value='USD'>USD</option>
          <option value='UAH'>UAH</option>
          <option value='RUB'>RUB</option>
        </Field>
        <ErrorMessage className='error' name="currency" component="p" />
        <label htmlFor='text'>Ваше сообщение</label>
        <textarea
          id='text'
          name='text'
          as="textarea"
        />
        <ErrorMessage className='error' name="text" component="p" />
        {/* <label className='checkbox'>
          <Field
            name='terms'
            type='checkbox'
          />
          Соглашаетесь с политикой конфиденциальности?
        </label>
        <ErrorMessage className='error' name="terms" component="p" /> */}
        <MyCheckBox 
          name="terms"
        >
          Соглашаетесь с политикой конфиденциальности?
        </MyCheckBox>
        <button type='submit'>Отправить</button>
      </Form>
    </Formik>
  );
};

export default CustomForm;
