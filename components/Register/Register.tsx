import React from 'react';
import { Input, RedButton, Button } from 'components';
import { useFormik } from 'formik';
import { RegisterSchema } from 'schema';
import { signIn } from 'next-auth/react';
import { registerHandler } from 'services';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      const data = {
        userName: values.userName,
        email: values.email,
        password: values.password,
        repeatPassword: values.repeatPassword,
      };
      try {
        const response = await registerHandler(data);
        console.log(response);
      } catch (error) {
        throw error;
      }
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik.errors);

  return (
    <div className='flex flex-col p-10 justify-center'>
      <h1 className='text-white text-center text-3xl'>Create an account</h1>
      <p className='text-center text-xs mt-2 text-gray-500'>
        Start your journey!
      </p>
      <form onSubmit={formik.handleSubmit} className='flex flex-col'>
        <Input
          id='userName'
          type='text'
          placeholder='At least 3 & max.15 lower case characters'
          label='Name'
          name='userName'
          onChange={formik.handleChange}
          value={formik.values.userName}
        />
        <Input
          id='email'
          type='email'
          placeholder='Enter your email'
          label='Email'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          id='password'
          type='password'
          placeholder='At least 8 & max.15 lower case characters'
          label='Password'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Input
          id='repeatPassword'
          type='password'
          placeholder='Confirm password'
          label='Confirm password'
          name='repeatPassword'
          onChange={formik.handleChange}
          value={formik.values.repeatPassword}
        />
        <RedButton className='w-96 h-10 my-5' name='Get started' />
        <Button
          onClick={() => signIn()}
          className='w-96 h-10 mt-2'
          name='Sign up with Google'
        />
      </form>
      <p className='text-gray-500 text-center mt-10'>
        Already have an account?
        <a className='text-blue-500 ml-2' href='0#'>
          Log in
        </a>
      </p>
    </div>
  );
};

export default Register;
