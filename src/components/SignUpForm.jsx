import { FaApple, FaGoogle } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  signInWithGoogle,
  signUpWithEmailAndPassword,
} from '../services/apiAuth';

import Input from './Input';
import ErrorMessage from './ErrorMessage';
import Toast from './Toast';
import Button from './Button.jsx';

function SignUpForm() {
  // const queryClient = useQueryClient();
  // Define validation rules for each field

  const navigate = useNavigate();
  const queryClient = useQueryClient();

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

  const { isLoading, mutate: signUp } = useMutation({
    mutationFn: signUpWithEmailAndPassword,
    onSuccess: user => {
      // queryClient.setQueriesData(['user'], user);
      Toast('success', 'Account Created Successfully');
      navigate('/', { replace: true });
    },

    onError: () => {
      Toast('error', 'Error Creating account, Please try again');
    },
  });

  // Define the submit callback function
  function submitCallback(formValues) {
    signUp(formValues);
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
    signInWithGoogle();
  }

  return (
    <>
      <div className="mt-10 flex flex-col gap-4 md:mb-8 md:flex-row">
        <button className="flex w-full items-center justify-center gap-x-2 rounded-full border border-primary-black-500 py-[14px] text-base font-medium">
          <IconContext.Provider value={{ size: '24px' }}>
            <FaApple />
          </IconContext.Provider>
          Continue with Apple
        </button>
        <button
          onClick={handleSignUpWithGoogle}
          className="flex w-full items-center justify-center gap-x-2 rounded-full border border-primary-black-500 py-[14px] text-base font-medium"
        >
          <IconContext.Provider value={{ size: '24px' }}>
            <FaGoogle />
          </IconContext.Provider>
          Continue with Google
        </button>
        <div className="flex items-center">
          <span className="block"></span>
          <span>or</span>
          <span className="block"></span>
        </div>
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
                disabled={isLoading}
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
                disabled={isLoading}
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
              // autoComplete="off"
              placeholder="Enter Email Address"
              className={errors.email && 'border-red-500'}
              disabled={isLoading}
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
              disabled={isLoading}
            >
              {errors.password && <ErrorMessage message={errors.password} />}
            </Input>
          </div>
        </div>
        <Button
          onClick={handleSubmit}
          isLoading={isLoading}
          type="submit"
          disabled={isLoading}
        >
          Create Account
        </Button>
        <p className="mt-4 text-center text-sm font-medium text-grey-500">
          Already Created?{' '}
          <span className="text-primary-black-500">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </form>
    </>
  );
}

export default SignUpForm;
