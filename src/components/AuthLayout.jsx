import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';

function AuthLayout() {
  const location = useLocation();

  const pathName = location.pathname.split('/')[1];
  console.log(pathName);

  return (
    <main className="h-screen px-5">
      <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:gap-x-10 lg:gap-x-20">
        <div className="py-8">
          <Logo />
          <h1 className="mt-12 font-neue text-[32px]">
            {pathName === 'sign-up'
              ? 'Create an Account'
              : 'Log in into your Account'}
          </h1>
          <p className="mt-3 max-w-[17rem] text-sm text-[#8E8F94]">
            {pathName === 'sign-up'
              ? 'Join to start shopping and stay up-to-date on the latest deals.'
              : 'Log in to your account to shopping the newest fashion style'}
          </p>
          <Outlet />
        </div>
        <div className="hidden h-full max-w-full object-contain md:block">
          <img className="" src="auth-image.png" alt="Two Beautiful Women" />
        </div>
      </div>
    </main>
  );
}

export default AuthLayout;
