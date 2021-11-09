import { useFormik } from "formik";
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

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      amount: 0,
      currency: '',
      text: '',
      terms: false,
    },
    validationSchema: Yup.object({
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
      text: Yup.string()
        .min(10, 'Не менее 10 символов'),
      terms: Yup.boolean()
        .required('Необходимо согласие!')
        .oneOf([true], 'Необходимо согласие!'),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2>Отправить пожертвование</h2>
      <label htmlFor="name">Ваше имя</label>
      <input 
        id="name"
        name="name" 
        type="text" 
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.name && formik.touched.name ? <p className="error">{formik.errors.name}</p> : null}
      <label htmlFor="email">Ваша почта</label>
      <input 
        id="email" 
        name="email" 
        type="email" 
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.email && formik.touched.email ? <p className="error">{formik.errors.email}</p> : null}
      <label htmlFor="amount">Количество</label>
      <input 
        id="amount" 
        name="amount" 
        type="number" 
        value={formik.values.amount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.amount && formik.touched.amount ? <p className="error">{formik.errors.amount}</p> : null}
      <label htmlFor="currency">Валюта</label>
      <select 
        id="currency" 
        name="currency"
        value={formik.values.currency}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="">Выберите валюту</option>
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
        <option value="RUB">RUB</option>
      </select>
      {formik.errors.currency && formik.touched.currency ? <p className="error">{formik.errors.currency}</p> : null}
      <label htmlFor="text">Ваше сообщение</label>
      <textarea 
        id="text" 
        name="text" 
        value={formik.values.text}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.text && formik.touched.text ? <p className="error">{formik.errors.text}</p> : null}
      <label className="checkbox">
        <input 
          name="terms" 
          type="checkbox"
          value={formik.values.terms}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        Соглашаетесь с политикой конфиденциальности?
      </label>
      {formik.errors.terms && formik.touched.terms ? <p className="error">{formik.errors.terms}</p> : null}
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
