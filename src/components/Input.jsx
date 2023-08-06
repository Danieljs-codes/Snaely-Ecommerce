import { twMerge } from 'tailwind-merge';

function Input({ className, children, ...rest }) {
  return (
    <>
      <input
        className={twMerge(
          'block w-full placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 focus:border-0 focus:ring-1 focus:ring-primary-black-500',
          className
        )}
        {...rest}
      />
      {children}
    </>
  );
}

export default Input;
