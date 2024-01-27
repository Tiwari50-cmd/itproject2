import React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import AuthLayout from '../auth-layout';
import { Button, PasswordTextField, TextField } from '@/components';
import { LoginPayload } from '@/types';
import { useDispatch } from 'react-redux';
import { loginConstant } from '@/redux/constant';


const VALIDATION_SCHEMA = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Invalid email address'
    )
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must be at least 8 characters long, including one letter, one number, and one special character'
    )
    .required('Password is required'),
});
const VALIDATION_SCHEMA_REGISTER = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  number: Yup.string()
    .matches(/^[9]\d{9,9}$/, 'Please enter a valid number')
    .required('Number is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must be at least 8 characters long, including one letter, one number, and one special character'
    )
    .required('Password is required'),
  cPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

interface IProps {
  setloginData: React.Dispatch<React.SetStateAction<{}>>;
  handleModelClose: () => void; // Define handleModelClose as a function that takes no arguments and returns void
}

const Login: React.FC<IProps> = ({setloginData,handleModelClose}) => {
  const [showRegister, setShowRegister] = React.useState(false);
  const [initialValues, setInitialValues] = useState({
    email: '',
    password: '',
  });
  const registerInitialValues = {
    name: '',
    email: '',
    number: '',
    password: '',
    cPassword: '',
  };
  const dispatch: any = useDispatch();

  const handleNavigateToRegister = () => setShowRegister(!showRegister);

  const handleLogin = async (val: LoginPayload) => {
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(val),
      });
      console.log(response, 'response');

      if (response.ok) {
        // If the response status is 200 OK
        const data = await response.json();
        console.log('Login successful:', data);
        setloginData({ user: data.user });
        handleModelClose();


        // Perform actions after successful login, e.g., update global state
        dispatch({
          type: loginConstant.LOGIN_SUCCESS,
          payload: data,
        });
      } else {
        // If the response status is not OK, handle the error
        const errorData = await response.json();
        console.error('Login failed:', errorData);

        // Perform actions for failed login, e.g., show an error message
      }
    } catch (error) {
      console.error('Error during login:', error);

      // Handle other errors, e.g., network issues
    }
  };

  return (
    <AuthLayout>
      <div className="py-5 px-10">
        <h1 className="text-xl text-dark font-medium mb-5">
          {!showRegister ? 'Login' : 'Register'}
        </h1>

        {showRegister ? (
          <Formik
            initialValues={registerInitialValues}
            onSubmit={() => {}}
            validationSchema={VALIDATION_SCHEMA_REGISTER}
            validateOnMount
          >
            {({ isSubmitting, isValid }) => (
              <Form>
                <TextField
                  name="name"
                  label="Full Name"
                  placeholder="Enter a full name"
                />
                <TextField
                  name="email"
                  label="Email"
                  placeholder="Enter a email address"
                />
                <TextField
                  name="number"
                  label="Phone Number"
                  placeholder="Enter a email address"
                />
                <PasswordTextField name="password" label="Password" />
                <PasswordTextField name="cPassword" label="Confirm Password" />

                <Button
                  text="Submit"
                  type="submit"
                  variant="primary"
                  className="w-full py-3 text-white"
                  isSubmitting={isSubmitting}
                  isValid={isValid}
                />
              </Form>
            )}
          </Formik>
        ) : (
          <Formik
            initialValues={initialValues}
            onSubmit={handleLogin}
            validationSchema={VALIDATION_SCHEMA}
            validateOnMount
          >
            {({ isSubmitting, isValid }) => (
              <Form>
                <TextField
                  name="email"
                  label="Email"
                  placeholder="Enter a email address"
                  value={initialValues.email}
                  onChange={(e: any) =>
                    setInitialValues((prevData) => ({
                      ...prevData,
                      email: e.target.value,
                    }))
                  }

                />
                <PasswordTextField name="password" label="Password" 
                value={initialValues.password}
                onChange={(e: any) =>
                  setInitialValues((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }))
                }
                />

                <div className="flex items-center justify-between my-4">
                  {/* <CheckBox
                    onChange={() => {}}
                    title="Remember me"
                    value="remember_me"
                    checked={false}
                    variant="small"
                  /> */}
                  <button className="text-dark text-xs">
                    Forget Password?
                  </button>
                </div>
                <Button
                  text="Submit"
                  type="submit"
                  variant="primary"
                  className="w-full py-3 text-white"
                  isSubmitting={isSubmitting}
                  isValid={isValid}
                />
              </Form>
            )}
          </Formik>
        )}

        <div className="flex items-center space-x-1 justify-center mt-10">
          <p className="text-dark text-xs">
            {showRegister
              ? `Already have an account`
              : `Don’t have an account?`}
          </p>
          <button
            className="text-primary text-xs font-medium"
            onClick={handleNavigateToRegister}
          >
            {showRegister ? 'Login' : 'Register'}
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default React.memo(Login);
