import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

function LoginForm() {
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const res = await axios.post('http://localhost:5000/login', values);
      alert(res.data.message);
      // You can also save the user/token here
    } catch (err) {
      setErrors({ email: err.response?.data?.error || 'Login failed' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />

          <label>Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" />

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
