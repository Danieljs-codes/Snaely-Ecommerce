import { FaApple, FaGoogle } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useMutation } from '@tanstack/react-query';
import { signInWithEmailAndPassword } from '../services/apiAuth';

import Input from './Input';
import ErrorMessage from './ErrorMessage';
import Toast from './Toast';

function LoginForm() {
  const navigate = useNavigate();

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
    mutationFn: signInWithEmailAndPassword,
    onSuccess: data => {
      Toast('success', 'Logged In Successfully 🎉');

      navigate('/');
    },
    onError: error => {
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
    },
    validationRules,
    submitCallback
  );

  return (
    <>
      <div className="mt-10 flex flex-col gap-4 md:mb-8 md:flex-row">
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
        <div className="flex items-center">
          <span className="block"></span>
          <span>or</span>
          <span className="block"></span>
        </div>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-y-6">
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
        <button
          onClick={handleSubmit}
          className="mt-10 block w-full rounded-full bg-primary-black-500 py-4 text-center text-base font-medium text-white"
          type="submit"
          disabled={isLoading}
        >
          Log in
        </button>
        <p className="mt-4 text-center text-sm font-medium text-grey-500">
          Don't have an account?{' '}
          <span className="text-primary-black-500">
            <Link to="/sign-up">Sign up</Link>
          </span>
        </p>
      </form>
    </>
  );
}

export default LoginForm;
