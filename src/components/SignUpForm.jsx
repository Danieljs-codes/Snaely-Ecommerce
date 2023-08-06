import React from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import Input from './Input';
import ErrorMessage from './ErrorMessage';
import useForm from '../hooks/useForm'; // Import the custom hook

function SignUpForm() {
  // Define validation rules for each field
  const validationRules = {
    email: value =>
      !/\S+@\S+\.\S+/.test(value) ? 'Please enter a valid email address' : null,
    password: value =>
      value.length < 6 ? 'Password must be at least 6 characters' : null,
    firstName: value =>
      value.length < 3 ? 'First name must be at least 3 characters' : null,
    lastName: value =>
      value.length < 3 ? 'Last name must be at least 3 characters' : null,
  };

  // Define the submit callback function
  function submitCallback(formValues) {
    // signUp({ email, password, firstName, lastName });
  }

  // Use the useForm custom hook
  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    validationRules,
    submitCallback
  );

  function handleSignUpWithGoogle() {
    // signUpWithGoogle();
  }

  return (
    <main className="px-5 py-8">
      <Logo />
      <h1 className="mt-12 font-neue text-[32px]">Create an Account</h1>
      <p className="mt-3 max-w-[17rem] text-sm text-[#8E8F94]">
        Join to start shopping and stay up-to-date on the latest deals.
      </p>
      <div className="mt-10 flex flex-col gap-4">
        <button className="flex w-full items-center justify-center gap-x-2 rounded-full border border-primary-black-500 py-[14px] text-base font-medium">
          <IconContext.Provider value={{ size: '24px' }}>
            <FaApple />
          </IconContext.Provider>
          Continue with Apple
        </button>
        <button className="flex w-full items-center justify-center gap-x-2 rounded-full border border-primary-black-500 py-[14px] text-base font-medium">
          <IconContext.Provider value={{ size: '24px' }}>
            <FaGoogle />
          </IconContext.Provider>
          Continue with Google
        </button>
        <div className="flex items-center">{/* ... Divider line ... */}</div>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="mb-3 font-neue text-xl">
                First Name
              </label>
              <Input
                value={values.firstName}
                onChange={e => handleChange('firstName', e.target.value)}
                id="firstName"
                type="text"
                placeholder="First Name"
                className={errors.firstName && 'border-red-500'}
              >
                {errors.firstName && (
                  <ErrorMessage message={errors.firstName} />
                )}
              </Input>
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="font-neue text-xl">
                Last Name
              </label>
              <Input
                value={values.lastName}
                onChange={e => handleChange('lastName', e.target.value)}
                id="lastName"
                type="text"
                placeholder="Last Name"
                className={errors.lastName && 'border-red-500'}
              >
                {errors.lastName && <ErrorMessage message={errors.lastName} />}
              </Input>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="mb-3 font-neue text-xl">
              Email
            </label>
            <Input
              value={values.email}
              onChange={e => handleChange('email', e.target.value)}
              id="email"
              type="email"
              autoComplete="off"
              placeholder="Enter Email Address"
              className={errors.email && 'border-red-500'}
            >
              {errors.email && <ErrorMessage message={errors.email} />}
            </Input>
          </div>
          <div>
            <label htmlFor="password" className="mb-3 font-neue text-xl">
              Password
            </label>
            <Input
              value={values.password}
              onChange={e => handleChange('password', e.target.value)}
              id="password"
              type="password"
              placeholder="Enter your desired password"
              className={errors.password && 'border-red-500'}
            >
              {errors.password && <ErrorMessage message={errors.password} />}
            </Input>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-10 block w-full rounded-full bg-primary-black-500 py-4 text-center text-base font-medium text-white"
          type="submit"
        >
          Create Account
        </button>
        <p className="mt-4 text-center text-sm font-medium text-grey-500">
          Already Created?{' '}
          <span className="text-primary-black-500">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </form>
    </main>
  );
}

export default SignUpForm;
