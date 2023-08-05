import { useState } from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import Logo from '../components/Logo';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);

  // const { mutate: signUp,  } = useMutation({
  //   mutationFn: signUpUser,
  //   onSuccess: () => {
  //     toast.custom(
  //       t => (
  //         <div
  //           className={`rounded-full bg-white px-6 py-4 shadow-md ${
  //             t.visible ? 'animate-enter' : 'animate-leave'
  //           }`}
  //         >
  //           Hello TailwindCSS! 👋
  //         </div>
  //       ),
  //       { position: 'bottom-right' }
  //     );
  //     navigate('/', { replace: true });
  //   },
  // });

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
        <div className="flex items-center">
          <span className="block h-[1px] flex-1 bg-[#E4E4E4]"></span>
          <span className="px-2 text-base font-normal text-primary-black-500">
            or
          </span>
          <span className="block h-[1px] flex-1 bg-[#E4E4E4]"></span>
        </div>
      </div>
      <form onSubmit={e => console.log(e)}>
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="mb-3 font-neue text-xl">
                First Name
              </label>
              <input
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                id="firstName"
                className="block w-full placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 focus:border-0 focus:ring-1 focus:ring-primary-black-500"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="font-neue text-xl">
                Last Name
              </label>
              <input
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                id="lastName"
                className="block w-full placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 focus:border-0 focus:ring-1 focus:ring-primary-black-500"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="mb-3 font-neue text-xl">
              Email
            </label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              id="email"
              className="block w-full placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 focus:border-0 focus:ring-1 focus:ring-primary-black-500"
              type="email"
              placeholder="Enter Email Address"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-3 font-neue text-xl">
              Password
            </label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              id="password"
              className="block w-full placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 focus:border-0 focus:ring-1 focus:ring-primary-black-500"
              type="password"
              placeholder="Enter your desired password"
            />
          </div>
        </div>
        <button
          onClick={e => console.log(e)}
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

export default SignUp;
