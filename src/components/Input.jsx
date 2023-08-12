import { twMerge } from "tailwind-merge";

function Input({ className, children, disabled, ...rest }) {
  return (
    <>
      <input
        className={twMerge(
          "block w-full placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 focus:border-0" +
            " focus:ring-1 focus:ring-primary-black-500 disabled:cursor-not-allowed disabled:bg-gray-100" +
            " disabled:border-gray-200 disabled:text-gray-500 disabled:ring-gray-200",
          className
        )}
        disabled={disabled}
        {...rest}
      />
      {children}
    </>
  );
}

export default Input;
