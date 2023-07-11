import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Register = () => {
  return (
    <Formik
    initialValues={{firstname:'',lastname:'',email:'',password:'',cpassword:''}}
    validationSchema={Yup.object({
        firstname:Yup.string()
        .required('First name is required')
        .max(20,'must be of 20 characters or less'),

        lastname:Yup.string()
        .required('Lastname is required')
        .max(20,'must be of 20 characters or less'),


        email:Yup.string()
        .email('invalid email format')
        .required('Email is mandatory.'),


       password:Yup.string()
        .required('Password is Mandatory')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$?-_&!])[A-Za-z\d@#$?-_&!]{8,50}$/,'weak password,password should be more than 8 characters'),


        cpassword:Yup.string()
        .required('confirmed password is Mandatory')
        .oneOf([Yup.ref('password'),null],'password and Confirm password does  not match')
        
    })}
    >
    <div className="container my-4">
        <div className="row d-flex justify-content-center">
            <div className="col-md-5 shadow-lg">
                <Form>
                    {/* first name */}
                    <div className="mb-2">
                        <label htmlFor="firstname">First Name</label>
                        <Field type='text' name='firstname' id='firstname' className='form-control'>
                        </Field>

                            <ErrorMessage name='firstname'>
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                    </div>

                    {/* last name */}

                    <div className="mb-2">
                        <label htmlFor="lastname">Last Name</label>
                        <Field type='text' name='lastname' id='lastname' className='form-control'>
                        </Field>

                            <ErrorMessage name='lastname'>
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                    </div>

                    {/* email */}

                    <div className="mb-2">
                        <label htmlFor="email">E-mail</label>
                        <Field type='email' name='email' id='email' className='form-control'>
                        </Field>

                            <ErrorMessage name='email'>
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                    </div>

                    {/* password */}
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <Field type='password' name='password' id='password' className='form-control'>

                        </Field>
                            <ErrorMessage name='password'>
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                    </div>

                    {/* confirm password */}

                    <div className="mb-2">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <Field type='password' name='cpassword' id='cpassword' className='form-control'>
                        </Field>

                            <ErrorMessage name='cpassword'>
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                    </div>

                    <button className='btn btn-primary'>Register</button>

                </Form>
            </div>
        </div>
    </div>

    
    </Formik>
  )
}

export default Register
