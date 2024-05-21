import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Имя обязательно'),
  middleName: Yup.string().required('Отчество обязательно'),
  lastName: Yup.string().required('Фамилия обязательна'),
  birthDate: Yup.string().matches(
    /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/, 
    "Неверный формат даты (ДД.ММ.ГГГГ)"
  ),
  address: Yup.string(),
});

const EditProfileForm = () => {
  return (
    <div>
      <h1>Форма Редактирования Профиля</h1>
      <Formik
        initialValues={{
          firstName: '',
          middleName: '',
          lastName: '',
          birthDate: '',
          address: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission
          console.log('Form submitted:', values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label>Имя:</label>
              <Field name="firstName" />
              {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
            </div>
            <div>
              <label>Отчество:</label>
              <Field name="middleName" />
              {errors.middleName && touched.middleName && <div>{errors.middleName}</div>}
            </div>
            <div>
              <label>Фамилия:</label>
              <Field name="lastName" />
              {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
            </div>
            <div>
              <label>Дата рождения (ДД.ММ.ГГГГ):</label>
              <Field name="birthDate" />
              {errors.birthDate && touched.birthDate && <div>{errors.birthDate}</div>}
            </div>
            <div>
              <label>Адрес:</label>
              <Field name="address" />
              {errors.address && touched.address && <div>{errors.address}</div>}
            </div>
            <button type="submit">Сохранить</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfileForm;