import React from  "react";
import {Formik,Form,Field,ErrorMessage} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'

function RegisterForm(){
    const handleSubmit=async(CSSFontFeatureValuesRule, {setSubmitting ,resetForm ,setErrors}) =>
    {
        try{
            const res=await axios.post('http://localhost:5000/register', values)
            alert(res.data.message)
            resetForm()
        }catch(err){
            setErrors({email:err.response?.data?.error || 'Something went wrong'})
        }finally{
            setSubmitting(false)
        }
    }
}
return(
       <div>
      <h2>Register</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().min(6, 'Must be at least 6 chars').required('Required'),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>Username</label>
          <Field name="username" type="text" />
          <ErrorMessage name="username" component="div" />

          <label>Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />

          <label>Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );


export default RegisterForm;
